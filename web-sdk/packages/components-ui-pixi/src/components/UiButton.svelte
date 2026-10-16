<script lang="ts">
	import { Text } from 'pixi-svelte';
	import { Button, type ButtonProps } from 'components-pixi';

	import UiSprite from './UiSprite.svelte';
	import type { ButtonIcon } from '../types';
	import type { Snippet } from 'svelte';
	import { i18nDerived } from '../i18n/i18nDerived';
	import { UI_BASE_FONT_SIZE, UI_BASE_SIZE } from '../constants';

	type Props = Omit<ButtonProps, 'children'> & {
		icon: ButtonIcon;
		sizes: { width: number; height: number };
		active?: boolean;
		children?: Snippet;
		variant?: 'dark' | 'light';
	};

	const {
		icon,
		active,
		variant = 'dark',
		children: childrenFromParent,
		...buttonProps
	}: Props = $props();
</script>

<Button {...buttonProps}>
	{#snippet children({ center, hovered, pressed })}
		<UiSprite
			{...center}
			anchor={0.5}
			width={buttonProps.sizes.width}
			height={buttonProps.sizes.height}
			backgroundColor={variant === 'dark' ? 0x000000 : 0xffffff}
			{...buttonProps.disabled
				? {
						backgroundColor: 0xaaaaaa,
					}
				: {}}
			{...active
				? {
						borderWidth: 10,
						borderColor: variant === 'dark' ? 0xffffff : 0x000000,
					}
				: {}}
		/>

		<Text
			{...center}
			anchor={0.5}
			text={i18nDerived[icon]()}
			style={{
				align: 'center',
				wordWrap: true,
				wordWrapWidth: UI_BASE_SIZE * 0.7,
				fontFamily: 'Lilita One',
				fontWeight: '800',
				fontSize: UI_BASE_FONT_SIZE * 0.68,
				letterSpacing: 1,
				fill: 0xffe9b0,
				stroke: { color: 0x3a2313, width: 5 },
			}}
		/>

		{@render childrenFromParent?.()}
	{/snippet}
</Button>
