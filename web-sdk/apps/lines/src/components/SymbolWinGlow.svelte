<script lang="ts">
	import { Tween } from 'svelte/motion';
	import { sineInOut } from 'svelte/easing';
	import { Rectangle } from 'pixi-svelte';

	import { SYMBOL_SIZE } from '../game/constants';

	type Props = { x?: number; y?: number };

	const props: Props = $props();

	const pulse = new Tween(0, { duration: 480, easing: sineInOut });
	let token = 0;

	const run = async () => {
		const current = ++token;
		while (current === token) {
			await pulse.set(1);
			if (current !== token) return;
			await pulse.set(0);
		}
	};

	$effect(() => {
		run();
		return () => {
			token++;
		};
	});

	const p = $derived(pulse.current);
	const outer = $derived(SYMBOL_SIZE * (1.06 + p * 0.08));
	const inner = $derived(SYMBOL_SIZE * (0.92 + p * 0.05));
</script>

<!-- Lights the whole cell so the paying symbols are unmistakable. -->
<Rectangle
	anchor={0.5}
	x={props.x}
	y={props.y}
	width={outer}
	height={outer}
	borderRadius={18}
	backgroundColor={0xffd24a}
	backgroundAlpha={0.14 + p * 0.12}
	borderColor={0xfff3c4}
	borderWidth={4}
	borderAlpha={0.7 + p * 0.3}
/>
<Rectangle
	anchor={0.5}
	x={props.x}
	y={props.y}
	width={inner}
	height={inner}
	borderRadius={14}
	backgroundColor={0xfff0c8}
	backgroundAlpha={0.1 + p * 0.14}
/>
