<script lang="ts" module>
	import type { WinLevelData } from '../game/winLevelMap';

	export type EmitterEventFreeSpinOutro =
		| { type: 'freeSpinOutroShow' }
		| { type: 'freeSpinOutroHide' }
		| { type: 'freeSpinOutroCountUp'; amount: number; winLevelData: WinLevelData };
</script>

<script lang="ts">
	import { Tween } from 'svelte/motion';
	import { backOut, sineInOut } from 'svelte/easing';
	import { Container, Rectangle, Sprite, Text } from 'pixi-svelte';
	import { FadeContainer, WinCountUpProvider, ResponsiveBitmapText } from 'components-pixi';
	import { bookEventAmountToCurrencyString } from 'utils-shared/amount';
	import { waitForResolve } from 'utils-shared/wait';
	import { CanvasSizeRectangle, MainContainer } from 'components-layout';
	import { OnMount } from 'components-shared';

	import { getContext } from '../game/context';
	import PressToContinue from './PressToContinue.svelte';
	import WinCoins from './WinCoins.svelte';

	const PANEL_WIDTH = 720;
	const PANEL_HEIGHT = 460;
	const BOTTLE_SIZE = 170;
	const RIBBON_WIDTH = PANEL_WIDTH * 0.42;
	const RIBBON_HEIGHT = 11;
	const RIBBON_X = (PANEL_WIDTH - RIBBON_WIDTH) * 0.5;
	const RIBBON_Y = PANEL_HEIGHT - 48;

	const context = getContext();

	let show = $state(false);
	let amount = $state(0);
	let winLevelData = $state<WinLevelData>();
	let oncomplete = $state(() => {});
	let onCountUpComplete = $state(() => {});

	// Panel springs in rather than appearing flat, and the trophy bottle
	// keeps breathing while the total counts up.
	const panelScale = new Tween(0.86, { duration: 300, easing: backOut });
	const bobY = new Tween(0, { duration: 850, easing: sineInOut });
	let bobToken = 0;

	const runBob = async () => {
		const token = ++bobToken;
		while (token === bobToken) {
			await bobY.set(-14);
			if (token !== bobToken) return;
			await bobY.set(4);
		}
	};

	$effect(() => {
		if (show) {
			panelScale.set(0.86, { duration: 0 });
			panelScale.set(1);
			runBob();
		} else {
			bobToken++;
		}
	});

	context.eventEmitter.subscribeOnMount({
		freeSpinOutroShow: () => (show = true),
		freeSpinOutroHide: async () => (show = false),
		freeSpinOutroCountUp: async (emitterEvent) => {
			amount = emitterEvent.amount;
			winLevelData = emitterEvent.winLevelData;
			await waitForResolve((resolve) => (oncomplete = resolve));
		},
	});

	const layout = $derived(context.stateLayoutDerived.mainLayout());
</script>

<FadeContainer {show}>
	{#if winLevelData}
		{@const duration = winLevelData.presentDuration}
		<WinCountUpProvider {amount} {duration} oncomplete={() => onCountUpComplete()}>
			{#snippet children({ countUpAmount, startCountUp, finishCountUp, countUpCompleted })}
				<OnMount onmount={() => startCountUp()} />

				<CanvasSizeRectangle backgroundColor={0x120a02} backgroundAlpha={0.7} />

				<!-- emeralds fall behind the panel so they frame it instead of
				     covering the amount -->
				<WinCoins emit={!countUpCompleted} levelAlias={winLevelData?.alias} />

				<MainContainer>
					<Container
						x={layout.width * 0.5}
						y={layout.height * 0.5}
						scale={{ x: panelScale.current, y: panelScale.current }}
					>
						<Container x={-PANEL_WIDTH * 0.5} y={-PANEL_HEIGHT * 0.5}>
							<Rectangle
								width={PANEL_WIDTH}
								height={PANEL_HEIGHT}
								borderRadius={26}
								backgroundColor={0x3a2313}
								backgroundAlpha={0.97}
								borderColor={0xffd24a}
								borderWidth={5}
							/>

							<Text
								anchor={{ x: 0.5, y: 0 }}
								x={PANEL_WIDTH * 0.5}
								y={72}
								text="¡GANASTE!"
								style={{
									fontFamily: 'Lilita One',
									fontSize: 64,
									fontWeight: '800',
									fill: 0xffd24a,
									stroke: { color: 0x1c0f04, width: 8 },
								}}
							/>

							<Container x={PANEL_WIDTH * 0.5} y={PANEL_HEIGHT * 0.54}>
								<ResponsiveBitmapText
									anchor={0.5}
									style={{ fontFamily: 'gold', fontSize: 96 }}
									text={bookEventAmountToCurrencyString(countUpAmount)}
									maxWidth={PANEL_WIDTH * 0.82}
								/>
							</Container>

							<Text
								anchor={{ x: 0.5, y: 0 }}
								x={PANEL_WIDTH * 0.5}
								y={PANEL_HEIGHT * 0.74}
								text="PREMIO TOTAL"
								style={{
									fontFamily: 'Lilita One',
									fontSize: 32,
									fontWeight: '700',
									fill: 0xffffff,
									letterSpacing: 4,
								}}
							/>

							<!-- Colombian tricolour as a small flag bar: three square
							     segments that abut exactly, inset from the panel edge -->
							<Rectangle
								x={RIBBON_X}
								y={RIBBON_Y}
								width={RIBBON_WIDTH * 0.5}
								height={RIBBON_HEIGHT}
								backgroundColor={0xffcd00}
							/>
							<Rectangle
								x={RIBBON_X + RIBBON_WIDTH * 0.5}
								y={RIBBON_Y}
								width={RIBBON_WIDTH * 0.25}
								height={RIBBON_HEIGHT}
								backgroundColor={0x003893}
							/>
							<Rectangle
								x={RIBBON_X + RIBBON_WIDTH * 0.75}
								y={RIBBON_Y}
								width={RIBBON_WIDTH * 0.25}
								height={RIBBON_HEIGHT}
								backgroundColor={0xce1126}
							/>
						</Container>

						<!-- trophy bottle rests on the panel's top edge -->
						<Sprite
							key="colombiano_bottle_golden"
							anchor={0.5}
							x={0}
							y={-PANEL_HEIGHT * 0.5 - 24 + bobY.current}
							width={BOTTLE_SIZE}
							height={BOTTLE_SIZE}
						/>
					</Container>
				</MainContainer>

				<PressToContinue onpress={() => (countUpCompleted ? oncomplete() : finishCountUp())} />
			{/snippet}
		</WinCountUpProvider>
	{/if}
</FadeContainer>
