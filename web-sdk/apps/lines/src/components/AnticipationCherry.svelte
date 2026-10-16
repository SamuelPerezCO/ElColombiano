<script lang="ts">
	import { Tween } from 'svelte/motion';
	import { linear } from 'svelte/easing';
	import { Graphics } from 'pixi-svelte';

	type Props = {
		x: number;
		height: number;
		delay: number;
		duration: number;
		size: number;
		drift: number;
	};

	const props: Props = $props();

	const fall = new Tween(0, { duration: props.duration, easing: linear });
	let token = 0;

	const run = async () => {
		const current = ++token;
		await new Promise((resolve) => setTimeout(resolve, props.delay));
		while (current === token) {
			fall.set(0, { duration: 0 });
			await fall.set(1);
		}
	};

	$effect(() => {
		run();
		return () => {
			token++;
		};
	});

	// A coffee cherry: red berry, highlight, and a short green stem.
	const drawCherry = (graphics: any) => {
		const r = props.size;
		graphics.circle(0, 0, r).fill({ color: 0xc8102e });
		graphics.circle(-r * 0.32, -r * 0.3, r * 0.3).fill({ color: 0xff8080, alpha: 0.75 });
		graphics
			.moveTo(0, -r * 0.9)
			.lineTo(r * 0.45, -r * 1.8)
			.stroke({ color: 0x2f7d32, width: Math.max(2, r * 0.24) });
	};

	const progress = $derived(fall.current);
	const y = $derived(progress * props.height);
	const x = $derived(props.x + Math.sin(progress * Math.PI * 2) * props.drift);
	const alpha = $derived(
		progress < 0.12 ? progress / 0.12 : progress > 0.86 ? (1 - progress) / 0.14 : 1,
	);
</script>

<Graphics {x} {y} {alpha} draw={drawCherry} />
