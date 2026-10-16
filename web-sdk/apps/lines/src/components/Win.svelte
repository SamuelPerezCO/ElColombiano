<script lang="ts" module>
	import type { WinLevelData } from '../game/winLevelMap';

	export type EmitterEventWin =
		| { type: 'winShow' }
		| { type: 'winHide' }
		| { type: 'winUpdate'; amount: number; winLevelData: WinLevelData };
</script>

<script lang="ts">
	import { Container } from 'pixi-svelte';
	import { FadeContainer, WinCountUpProvider, ResponsiveBitmapText } from 'components-pixi';
	import { waitForResolve, waitForTimeout } from 'utils-shared/wait';
	import { bookEventAmountToCurrencyString } from 'utils-shared/amount';
	import { CanvasSizeRectangle, MainContainer } from 'components-layout';
	import { OnMount } from 'components-shared';

	import { Tween } from 'svelte/motion';
	import { linear } from 'svelte/easing';
	import { Graphics, Sprite, Text } from 'pixi-svelte';

	import WinCoins from './WinCoins.svelte';
	import PressToContinue from './PressToContinue.svelte';

	const drawRays = (graphics: { poly: (points: number[]) => { fill: (style: object) => void } }) => {
		const radius = 430;
		for (let i = 0; i < 12; i++) {
			const angle = (i / 12) * Math.PI * 2;
			const spread = 0.1;
			graphics
				.poly([
					0,
					0,
					Math.cos(angle - spread) * radius,
					Math.sin(angle - spread) * radius,
					Math.cos(angle + spread) * radius,
					Math.sin(angle + spread) * radius,
				])
				.fill({ color: 0xffd24a, alpha: 0.16 });
		}
	};
	import { SYMBOL_SIZE } from '../game/constants';
	import { getContext } from '../game/context';

	const context = getContext();

	// Big wins land with a decaying camera shake.
	const shakeX = new Tween(0, { duration: 55, easing: linear });
	const shakeY = new Tween(0, { duration: 55, easing: linear });
	let shakeToken = 0;

	const runShake = async (intensity: number) => {
		const token = ++shakeToken;
		const steps = 12;
		for (let step = 0; step < steps; step++) {
			if (token !== shakeToken) return;
			const decay = 1 - step / steps;
			await Promise.all([
				shakeX.set((Math.random() * 2 - 1) * intensity * decay),
				shakeY.set((Math.random() * 2 - 1) * intensity * decay),
			]);
		}
		if (token !== shakeToken) return;
		shakeX.set(0);
		shakeY.set(0);
	};

	let show = $state(false);
	let amount = $state(0);
	let winLevelData = $state<WinLevelData>();
	let oncomplete = $state(() => {});
	let onCountUpComplete = $state(() => {});

	context.eventEmitter.subscribeOnMount({
		winShow: () => (show = true),
		winHide: () => (show = false),
		winUpdate: async (emitterEvent) => {
			amount = emitterEvent.amount;
			winLevelData = emitterEvent.winLevelData;
			await waitForResolve((resolve) => (oncomplete = resolve));
		},
	});
</script>

<FadeContainer {show}>
	{#if winLevelData}
		{@const isBigWin = winLevelData.type === 'big'}
		{@const duration = winLevelData.presentDuration}
		<WinCountUpProvider {amount} {duration} oncomplete={() => onCountUpComplete()}>
			{#snippet children({ countUpAmount, startCountUp, finishCountUp, countUpCompleted })}
				{@const isFancy = winLevelData?.type !== 'small'}
				{#if isFancy}
					<CanvasSizeRectangle backgroundColor={0x120a02} backgroundAlpha={0.55} />
				{/if}

				<OnMount
					onmount={async () => {
						if (isBigWin) runShake(18);
						else if (isFancy) runShake(7);
						await startCountUp();
						await waitForTimeout(300);
						oncomplete();
					}}
				/>

				<MainContainer>
					<Container
						x={context.stateGameDerived.boardLayout().x + shakeX.current}
						y={context.stateGameDerived.boardLayout().y + shakeY.current}
					>
						{#if isFancy}
							<Graphics y={-SYMBOL_SIZE * 0.95} draw={drawRays} />
							{#if winLevelData?.text}
								<Text
									anchor={0.5}
									y={-SYMBOL_SIZE * 0.95}
									text={winLevelData.text}
									style={{
										fontFamily: 'Lilita One',
										fontSize: SYMBOL_SIZE * (isBigWin ? 0.62 : 0.5),
										fontWeight: '800',
										fill: 0xffd24a,
										stroke: { color: 0x3a2313, width: 10 },
									}}
								/>
							{/if}
							<Sprite
								key="colombiano_ui_plate"
								anchor={0.5}
								y={SYMBOL_SIZE * 0.3}
								width={680}
								height={170}
							/>
						{/if}
						<!-- Small wins sit above the board's top edge so they never cover the symbols. -->
						<Container
							y={isFancy
								? SYMBOL_SIZE * 0.3
								: -(context.stateGameDerived.boardLayout().height * 0.5 + 112)}
						>
							<ResponsiveBitmapText
								anchor={0.5}
								maxWidth={isFancy
									? 560
									: context.stateLayoutDerived.canvasSizes().width /
										context.stateLayoutDerived.mainLayout().scale}
								text={bookEventAmountToCurrencyString(countUpAmount)}
								style={{
									fontFamily: 'gold',
									fontSize: isBigWin
										? SYMBOL_SIZE * 1.1
										: isFancy
											? SYMBOL_SIZE * 0.8
											: SYMBOL_SIZE * 0.5,
									align: 'center',
									fontWeight: 'bold',
									letterSpacing: 0,
								}}
							/>
						</Container>
					</Container>
				</MainContainer>

				<WinCoins emit={!countUpCompleted} levelAlias={winLevelData?.alias} />

				<PressToContinue
					y={context.stateGameDerived.boardLayout().y -
						context.stateGameDerived.boardLayout().height * 0.5 -
						56}
					showLabel={isFancy}
					onpress={() => (countUpCompleted ? oncomplete() : finishCountUp())}
				/>
			{/snippet}
		</WinCountUpProvider>
	{/if}
</FadeContainer>
