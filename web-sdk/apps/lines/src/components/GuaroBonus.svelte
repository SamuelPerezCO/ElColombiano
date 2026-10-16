<script lang="ts" module>
	export type EmitterEventGuaroBonus =
		| { type: 'guaroBonusShow'; totalPicks: number }
		| {
				type: 'guaroBonusPick';
				pick: number;
				totalPicks: number;
				prize: number;
				runningTotal: number;
				isGuaro: boolean;
		  }
		| { type: 'guaroBonusHide' };
</script>

<script lang="ts">
	import { Container, Text } from 'pixi-svelte';
	import { FadeContainer } from 'components-pixi';
	import { CanvasSizeRectangle, MainContainer } from 'components-layout';
	import { waitForResolve } from 'utils-shared/wait';
	import { bookEventAmountToCurrencyString } from 'utils-shared/amount';

	import { getContext } from '../game/context';
	import GuaroBottle from './GuaroBottle.svelte';

	const BOTTLE_COUNT = 12;
	const COLUMNS = 4;
	const BOTTLE_WIDTH = 180;
	const BOTTLE_HEIGHT = 220;
	const GAP = 26;
	const GRID_WIDTH = COLUMNS * BOTTLE_WIDTH + (COLUMNS - 1) * GAP;
	const GRID_HEIGHT = (BOTTLE_COUNT / COLUMNS) * BOTTLE_HEIGHT + (BOTTLE_COUNT / COLUMNS - 1) * GAP;

	type Reveal = { prize: number; isGuaro: boolean };

	const context = getContext();

	let show = $state(false);
	let totalPicks = $state(0);
	let picksMade = $state(0);
	let runningTotal = $state(0);
	let bottles = $state<(Reveal | null)[]>(Array(BOTTLE_COUNT).fill(null));
	let pending = $state<{ prize: number; runningTotal: number; isGuaro: boolean } | null>(null);
	let onRevealed = $state(() => {});

	context.eventEmitter.subscribeOnMount({
		guaroBonusShow: (emitterEvent) => {
			totalPicks = emitterEvent.totalPicks;
			picksMade = 0;
			runningTotal = 0;
			bottles = Array(BOTTLE_COUNT).fill(null);
			pending = null;
			show = true;
		},
		guaroBonusPick: async (emitterEvent) => {
			pending = {
				prize: emitterEvent.prize,
				runningTotal: emitterEvent.runningTotal,
				isGuaro: emitterEvent.isGuaro,
			};
			await waitForResolve((resolve) => (onRevealed = resolve));
		},
		guaroBonusHide: () => (show = false),
	});

	function pickBottle(bottleIndex: number) {
		if (!pending || bottles[bottleIndex]) return;
		bottles[bottleIndex] = { prize: pending.prize, isGuaro: pending.isGuaro };
		picksMade += 1;
		runningTotal = pending.runningTotal;
		const revealedGuaro = pending.isGuaro;
		pending = null;
		context.eventEmitter.broadcast({
			type: 'soundOnce',
			name: revealedGuaro ? 'sfx_youwon_panel' : 'sfx_winlevel_small',
		});
		// Let the reveal read before the next book event advances.
		setTimeout(() => onRevealed(), revealedGuaro ? 1000 : 650);
	}

	const layout = $derived(context.stateLayoutDerived.mainLayout());
	const gridX = $derived((layout.width - GRID_WIDTH) * 0.5);
	const gridY = $derived((layout.height - GRID_HEIGHT) * 0.5 + 40);
</script>

<FadeContainer {show}>
	<CanvasSizeRectangle backgroundColor={0x120a02} backgroundAlpha={0.72} />

	<MainContainer>
		<Text
			anchor={{ x: 0.5, y: 0 }}
			x={layout.width * 0.5}
			y={gridY - 130}
			text="¡ENCUENTRA EL GUARO!"
			style={{
				fontFamily: 'Lilita One',
				fontSize: 64,
				fontWeight: '700',
				fill: 0xffd24a,
			}}
		/>
		<Text
			anchor={{ x: 0.5, y: 0 }}
			x={layout.width * 0.5}
			y={gridY - 56}
			text={pending
				? `Elige una botella — ${totalPicks - picksMade} ${totalPicks - picksMade === 1 ? 'premio restante' : 'premios restantes'}`
				: 'Salud!'}
			style={{
				fontFamily: 'Lilita One',
				fontSize: 30,
				fill: 0xffffff,
			}}
		/>

		<Container x={gridX} y={gridY}>
			{#each bottles as bottle, bottleIndex}
				<GuaroBottle
					index={bottleIndex}
					x={(bottleIndex % COLUMNS) * (BOTTLE_WIDTH + GAP)}
					y={Math.floor(bottleIndex / COLUMNS) * (BOTTLE_HEIGHT + GAP)}
					width={BOTTLE_WIDTH}
					height={BOTTLE_HEIGHT}
					reveal={bottle}
					pickable={Boolean(pending)}
					onpick={() => pickBottle(bottleIndex)}
				/>
			{/each}
		</Container>

		<Text
			anchor={{ x: 0.5, y: 0 }}
			x={layout.width * 0.5}
			y={gridY + GRID_HEIGHT + 34}
			text={`TOTAL: ${bookEventAmountToCurrencyString(runningTotal)}`}
			style={{
				fontFamily: 'Lilita One',
				fontSize: 44,
				fontWeight: '700',
				fill: 0xffd24a,
			}}
		/>
	</MainContainer>
</FadeContainer>
