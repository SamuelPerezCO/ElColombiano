import { preview } from 'config-storybook';
import { stateBet } from 'state-shared';

import baseBooks from '../src/stories/data/base_books';
import bonusBooks from '../src/stories/data/bonus_books';

// ── Demo-only mock RGS ──────────────────────────────────────────────────────
// Seeds a fake balance and impersonates the Stake Engine wallet endpoints so
// the real BET / AUTO SPIN / BUY BONUS buttons are fully playable locally.
// Rounds are served from the math engine's generated books. In production
// none of this runs — the game talks to the real RGS.

const START_BALANCE = 1000;

stateBet.balanceAmount = START_BALANCE;

let balance = START_BALANCE * 1e6; // API units
let pendingPayout = 0;
let betID = 1;

const json = (payload: unknown) =>
	new Response(JSON.stringify(payload), {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
	});

const pickRandom = <T,>(items: T[]): T => items[Math.floor(Math.random() * items.length)];

const RGS_PATHS = [
	'/wallet/authenticate',
	'/wallet/balance',
	'/wallet/play',
	'/wallet/end-round',
	'/bet/event',
	'/bet/action',
];

const realFetch = window.fetch.bind(window);

window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
	const url = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url;
	const path = RGS_PATHS.find((rgsPath) => url.includes(rgsPath));
	if (!path) return realFetch(input, init);

	const body = init?.body ? JSON.parse(String(init.body)) : {};

	if (path === '/wallet/play') {
		const isBonus = String(body.mode ?? '')
			.toUpperCase()
			.includes('BONUS');
		const amount = body.amount ?? 0;
		balance -= amount * (isBonus ? 100 : 1);
		const book = pickRandom(isBonus ? bonusBooks : baseBooks);
		const payoutMultiplier = book.payoutMultiplier / 100;
		pendingPayout = Math.round(amount * payoutMultiplier);
		return json({
			balance: { amount: balance, currency: body.currency ?? 'USD' },
			round: {
				betID: betID++,
				amount,
				payout: pendingPayout,
				payoutMultiplier,
				active: pendingPayout > 0,
				state: book.events,
				mode: body.mode ?? 'BASE',
			},
		});
	}

	if (path === '/wallet/end-round') {
		balance += pendingPayout;
		pendingPayout = 0;
		return json({ balance: { amount: balance, currency: 'USD' } });
	}

	if (path === '/wallet/authenticate' || path === '/wallet/balance') {
		return json({ balance: { amount: balance, currency: 'USD' } });
	}

	// /bet/event and /bet/action just acknowledge.
	return json({ event: body.event ?? null });
};
// ────────────────────────────────────────────────────────────────────────────

export default preview;
