<script lang="ts">
	import { Tween } from 'svelte/motion';
	import { cubicOut, backOut } from 'svelte/easing';
	import { Sprite } from 'pixi-svelte';

	import { getSymbolInfo } from '../game/utils';
	import { SYMBOL_SIZE } from '../game/constants';
	import type { SymbolState } from '../game/types';

	type Props = {
		x?: number;
		y?: number;
		state?: SymbolState;
		symbolInfo: ReturnType<typeof getSymbolInfo>;
		oncomplete?: () => void;
	};

	const props: Props = $props();

	// Scale multipliers around the symbol's natural size, plus a small tilt.
	// Static art needs this motion to read as alive on the reels.
	const scaleX = new Tween(1, { duration: 160, easing: cubicOut });
	const scaleY = new Tween(1, { duration: 160, easing: cubicOut });
	const tilt = new Tween(0, { duration: 160, easing: cubicOut });

	let runToken = 0;

	// 'postWinStatic' is the state a symbol holds AFTER it has paid, so the
	// paying symbols stay enlarged and warmly lit until the next spin — that
	// is what shows the player which symbols actually won.
	const hasPaid = $derived(props.state === 'postWinStatic');
	const restScale = $derived(hasPaid ? 1.08 : 1);
	const tint = $derived(hasPaid ? 0xfff0c8 : 0xffffff);

	const settle = () => {
		scaleX.set(restScale, { duration: 220, easing: backOut });
		scaleY.set(restScale, { duration: 220, easing: backOut });
		tilt.set(0, { duration: 140, easing: cubicOut });
	};

	// Scatters land harder than everything else — that extra beat is what
	// builds tension toward the bonus.
	const isScatter = $derived(props.symbolInfo.assetKey === 'colombiano_s');

	// Squash on impact, overshoot, then settle — the weight of the symbol landing.
	const playLand = async () => {
		const token = ++runToken;
		const punch = isScatter ? 1.3 : 1.14;
		const squash = isScatter ? 0.74 : 0.84;
		scaleX.set(punch, { duration: 0 });
		scaleY.set(squash, { duration: 0 });
		if (token !== runToken) return;
		await Promise.all([
			scaleX.set(isScatter ? 0.9 : 0.95, { duration: isScatter ? 130 : 100 }),
			scaleY.set(isScatter ? 1.14 : 1.07, { duration: isScatter ? 130 : 100 }),
		]);
		if (token !== runToken) return;
		if (isScatter) {
			// a second, smaller bounce so the bottle keeps ringing
			await Promise.all([
				scaleX.set(1.08, { duration: 130 }),
				scaleY.set(1.08, { duration: 130 }),
			]);
			if (token !== runToken) return;
		}
		settle();
	};

	// Two confident pulses with a slight rocking tilt, so the paying symbol
	// announces itself rather than sitting still behind the glow.
	const playWin = async () => {
		const token = ++runToken;
		for (let pulse = 0; pulse < 2; pulse++) {
			if (token !== runToken) return;
			await Promise.all([
				scaleX.set(1.2, { duration: 180, easing: cubicOut }),
				scaleY.set(1.2, { duration: 180, easing: cubicOut }),
				tilt.set(pulse === 0 ? -5 : 5, { duration: 180, easing: cubicOut }),
			]);
			if (token !== runToken) return;
			await Promise.all([
				scaleX.set(1.02, { duration: 250, easing: cubicOut }),
				scaleY.set(1.02, { duration: 250, easing: cubicOut }),
				tilt.set(0, { duration: 250, easing: cubicOut }),
			]);
		}
		if (token !== runToken) return;
		settle();
	};

	$effect(() => {
		const state = props.state;
		// re-run whenever the rendered symbol changes
		props.symbolInfo;

		if (state === 'win') {
			// oncomplete fires when the celebration has played out
			playWin().then(() => props.oncomplete?.());
			return;
		}

		if (state === 'land') playLand();
		else {
			runToken++;
			settle();
		}

		props.oncomplete?.();
	});

	const baseWidth = $derived(SYMBOL_SIZE * props.symbolInfo.sizeRatios.width);
	const baseHeight = $derived(SYMBOL_SIZE * props.symbolInfo.sizeRatios.height);
</script>

<Sprite
	x={props.x}
	y={props.y}
	anchor={0.5}
	angle={tilt.current}
	{tint}
	key={props.symbolInfo.assetKey}
	width={baseWidth * scaleX.current}
	height={baseHeight * scaleY.current}
/>
