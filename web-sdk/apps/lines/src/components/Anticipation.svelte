<script lang="ts">
	import { Tween } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { Container, Rectangle } from 'pixi-svelte';
	import { stateBetDerived } from 'state-shared';

	import { getContext } from '../game/context';
	import type { Reel } from '../game/stateGame.svelte';
	import { REEL_PADDING, SYMBOL_SIZE } from '../game/constants';
	import AnticipationCherry from './AnticipationCherry.svelte';

	type Props = {
		reel: Reel;
		oncomplete: () => void;
	};

	const props: Props = $props();
	const context = getContext();

	const COLUMN_WIDTH = SYMBOL_SIZE * 0.98;
	const COLUMN_HEIGHT = SYMBOL_SIZE * 3.1;
	const CHERRY_COUNT = 9;

	// Fixed spread so the cherries don't re-randomise on every reactive update.
	const cherries = Array.from({ length: CHERRY_COUNT }, (_, index) => {
		const spread = (index / (CHERRY_COUNT - 1) - 0.5) * COLUMN_WIDTH * 0.78;
		return {
			x: spread,
			size: 6 + ((index * 7) % 5),
			delay: (index * 137) % 900,
			duration: 1100 + ((index * 233) % 500),
			drift: 4 + ((index * 3) % 7),
		};
	});

	const fade = new Tween(0, { duration: 240, easing: cubicOut });
	let closing = false;

	$effect(() => {
		fade.set(1);
	});

	$effect(() => {
		if (props.reel.reelState.motion === 'stopped' && !closing) {
			closing = true;
			fade.set(0, { duration: 260 }).then(() => props.oncomplete());
		}
	});

	const timeScale = $derived(stateBetDerived.timeScale());
	const x = $derived(
		context.stateGameDerived.boardLayout().x -
			context.stateGameDerived.boardLayout().width * 0.5 +
			(props.reel.reelIndex + REEL_PADDING) * SYMBOL_SIZE,
	);
	const y = $derived(context.stateGameDerived.boardLayout().y - SYMBOL_SIZE * 0.06);
</script>

<Container {x} {y} alpha={fade.current}>
	<!-- warm light spilling down the anticipated reel -->
	<Rectangle
		anchor={0.5}
		width={COLUMN_WIDTH}
		height={COLUMN_HEIGHT}
		borderRadius={18}
		backgroundColor={0xffd24a}
		backgroundAlpha={0.14}
		borderColor={0xffd24a}
		borderWidth={3}
		borderAlpha={0.85}
	/>
	<Rectangle
		anchor={0.5}
		width={COLUMN_WIDTH * 0.72}
		height={COLUMN_HEIGHT * 0.96}
		borderRadius={14}
		backgroundColor={0xfff0c8}
		backgroundAlpha={0.1}
	/>

	<Container x={0} y={-COLUMN_HEIGHT * 0.5}>
		{#each cherries as cherry, index (index)}
			<AnticipationCherry
				x={cherry.x}
				height={COLUMN_HEIGHT}
				size={cherry.size}
				delay={cherry.delay}
				duration={cherry.duration / timeScale}
				drift={cherry.drift}
			/>
		{/each}
	</Container>
</Container>
