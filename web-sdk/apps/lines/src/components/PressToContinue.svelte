<script lang="ts">
	import { MainContainer, OnPressFullScreen } from 'components-layout';
	import { OnHotkey } from 'components-shared';
	import { Text } from 'pixi-svelte';

	import { getContext } from '../game/context';

	type Props = {
		onpress: () => void;
		/** Vertical position in main-layout coordinates; defaults to the bottom edge. */
		y?: number;
		/** Hide the label while keeping tap/space-to-skip active. */
		showLabel?: boolean;
	};

	const props: Props = $props();
	const context = getContext();
</script>

{#if props.showLabel ?? true}
	<MainContainer alignVertical="bottom">
		<Text
			anchor={{ x: 0.5, y: 1 }}
			x={context.stateLayoutDerived.mainLayout().width * 0.5}
			y={props.y ?? context.stateLayoutDerived.mainLayout().height - 30}
			text="¡TOCA PARA CONTINUAR!"
			style={{
				fontFamily: 'Lilita One',
				fontSize: 34,
				fontWeight: '700',
				fill: 0xffd24a,
				stroke: { color: 0x3a2313, width: 6 },
			}}
		/>
	</MainContainer>
{/if}
<OnHotkey hotkey="Space" onpress={() => props.onpress()} />
<OnPressFullScreen onpress={() => props.onpress()} />
