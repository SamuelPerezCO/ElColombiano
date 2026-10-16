<script lang="ts" module>
	import { Rectangle, Sprite, getContextApp, type RectangleProps } from 'pixi-svelte';

	export type Props = RectangleProps & { key?: string };
</script>

<script lang="ts">
	const { key, ...props }: Props = $props();
	const context = getContextApp();

	// El Colombiano UI skin. Keyed elements map directly; keyless square
	// elements are the generic round buttons. Anything without a loaded
	// texture falls back to the stock rounded rectangle.
	const KEYED_TEXTURE_MAP: Record<string, string> = {
		base_ticker: 'colombiano_ui_plate',
		bet: 'colombiano_ui_btn_spin',
		buyBonus: 'colombiano_ui_btn_buybonus',
	};

	const isSquareButton = $derived(
		!key &&
			typeof props.width === 'number' &&
			typeof props.height === 'number' &&
			Math.abs(props.width / props.height - 1) < 0.3,
	);
	const isDisabled = $derived(props.backgroundColor === 0xaaaaaa);
	const isActive = $derived((props.borderWidth ?? 0) > 0);
	const candidateKey = $derived(
		key
			? (KEYED_TEXTURE_MAP[key] ?? null)
			: isSquareButton
				? isActive
					? 'colombiano_ui_btn_round_active'
					: 'colombiano_ui_btn_round'
				: null,
	);
	const textureKey = $derived(
		candidateKey && context.stateApp.loadedAssets?.[candidateKey] ? candidateKey : null,
	);
	// Buttons render slightly larger than their hit area so the art fills the slot.
	const sizeScale = $derived(textureKey === 'colombiano_ui_plate' ? 1 : 1.18);
</script>

{#if textureKey}
	<Sprite
		key={textureKey}
		x={props.x}
		y={props.y}
		anchor={props.anchor}
		width={(props.width ?? 0) * sizeScale}
		height={(props.height ?? 0) * sizeScale}
		tint={isDisabled ? 0x8a8a8a : 0xffffff}
	/>
{:else}
	<Rectangle borderRadius={50} {...props} />
{/if}
