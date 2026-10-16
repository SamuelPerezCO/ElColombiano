<script lang="ts" module>
	export type GuaroReveal = { prize: number; isGuaro: boolean };
</script>

<script lang="ts">
	import { Tween } from 'svelte/motion';
	import { backOut, cubicOut, sineInOut } from 'svelte/easing';
	import { Container, Rectangle, Sprite, Text } from 'pixi-svelte';
	import { ResponsiveBitmapText } from 'components-pixi';
	import { bookEventAmountToCurrencyString } from 'utils-shared/amount';

	type Props = {
		x: number;
		y: number;
		width: number;
		height: number;
		index: number;
		reveal: GuaroReveal | null;
		pickable: boolean;
		onpick: () => void;
	};

	const props: Props = $props();

	const popScale = new Tween(1, { duration: 200, easing: cubicOut });
	const floatY = new Tween(0, { duration: 1500, easing: sineInOut });
	let hovered = $state(false);
	let floatToken = 0;

	// Unopened bottles drift, staggered so the shelf never pulses in unison.
	const runFloat = async () => {
		const token = ++floatToken;
		await new Promise((resolve) => setTimeout(resolve, props.index * 110));
		while (token === floatToken) {
			await floatY.set(-6);
			if (token !== floatToken) return;
			await floatY.set(6);
		}
	};

	$effect(() => {
		if (props.reveal) {
			floatToken++;
			return;
		}
		runFloat();
	});

	// Opening a bottle punches it out of the shelf.
	$effect(() => {
		if (!props.reveal) return;
		popScale.set(0.7, { duration: 0 });
		popScale
			.set(props.reveal.isGuaro ? 1.2 : 1.13, { duration: 160, easing: cubicOut })
			.then(() => popScale.set(1, { duration: 260, easing: backOut }));
	});

	const scale = $derived(
		popScale.current * (!props.reveal && props.pickable && hovered ? 1.06 : 1),
	);
	const offsetY = $derived(props.reveal ? 0 : floatY.current);
</script>

<Container
	x={props.x + props.width * 0.5}
	y={props.y + props.height * 0.5 + offsetY}
	scale={{ x: scale, y: scale }}
>
	<Container x={-props.width * 0.5} y={-props.height * 0.5}>
		{#if props.reveal === null}
			<Rectangle
				width={props.width}
				height={props.height}
				borderRadius={18}
				backgroundColor={0x2a1804}
				backgroundAlpha={0.65}
				borderColor={hovered && props.pickable ? 0xffe9b0 : 0xffd24a}
				borderWidth={hovered && props.pickable ? 5 : 3}
				eventMode="static"
				cursor="pointer"
				onpointerdown={() => props.onpick()}
				onpointerover={() => (hovered = true)}
				onpointerout={() => (hovered = false)}
			/>
			<Sprite
				key="colombiano_bottle_closed"
				anchor={0.5}
				x={props.width * 0.5}
				y={props.height * 0.5}
				width={props.width * 0.86}
				height={props.width * 0.86}
				eventMode="none"
			/>
		{:else}
			<Rectangle
				width={props.width}
				height={props.height}
				borderRadius={18}
				backgroundColor={props.reveal.isGuaro ? 0xb8860b : 0x1d4d2b}
				backgroundAlpha={0.9}
				borderColor={props.reveal.isGuaro ? 0xffe066 : 0x66bb6a}
				borderWidth={4}
			/>
			{#if props.reveal.isGuaro}
				<Sprite
					key="colombiano_bottle_golden"
					anchor={0.5}
					x={props.width * 0.5}
					y={props.height * 0.38}
					width={props.width * 0.62}
					height={props.width * 0.62}
				/>
				<Text
					anchor={0.5}
					x={props.width * 0.5}
					y={props.height * 0.12}
					text="¡GUARO!"
					style={{
						fontFamily: 'Lilita One',
						fontSize: 30,
						fontWeight: '800',
						fill: 0xfff3c4,
					}}
				/>
			{/if}
			<Container
				x={props.width * 0.5}
				y={props.height * (props.reveal.isGuaro ? 0.78 : 0.5)}
			>
				<ResponsiveBitmapText
					anchor={0.5}
					maxWidth={props.width - 24}
					text={bookEventAmountToCurrencyString(props.reveal.prize)}
					style={{ fontFamily: 'gold', fontSize: 34 }}
				/>
			</Container>
		{/if}
	</Container>
</Container>
