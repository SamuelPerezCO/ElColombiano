<script lang="ts">
	import { onMount } from 'svelte';
	import { Tween } from 'svelte/motion';
	import { cubicInOut } from 'svelte/easing';
	import { Rectangle } from 'pixi-svelte';
	import { waitForTimeout } from 'utils-shared/wait';

	import { getContext } from '../game/context';

	type Props = {
		oncomplete: () => void;
	};

	const props: Props = $props();
	const context = getContext();

	const sizes = $derived(context.stateLayoutDerived.canvasSizes());

	// Colombian flag wipe: three bands sweep in from the left to cover the
	// screen, hold, then sweep out to the right. progress: 0 → 1 (cover) → 2 (clear).
	const progress = new Tween(0, { duration: 500, easing: cubicInOut });

	const BANDS = [
		{ color: 0xffcd00, heightRatio: 0.5, yRatio: 0, delay: 0 },
		{ color: 0x003893, heightRatio: 0.25, yRatio: 0.5, delay: 0.14 },
		{ color: 0xce1126, heightRatio: 0.25, yRatio: 0.75, delay: 0.28 },
	];

	const clamp01 = (value: number) => Math.min(Math.max(value, 0), 1);

	const bandX = (t: number, delay: number, width: number) => {
		const enter = clamp01((Math.min(t, 1) - delay) / (1 - delay));
		const exit = clamp01((Math.max(t - 1, 0) - delay) / (1 - delay));
		return (enter - 1 + exit) * width;
	};

	onMount(async () => {
		await progress.set(1);
		await waitForTimeout(150);
		await progress.set(2);
		props.oncomplete();
	});
</script>

{#each BANDS as band}
	<Rectangle
		x={bandX(progress.current, band.delay, sizes.width)}
		y={sizes.height * band.yRatio}
		width={sizes.width}
		height={sizes.height * band.heightRatio + 2}
		backgroundColor={band.color}
	/>
{/each}
