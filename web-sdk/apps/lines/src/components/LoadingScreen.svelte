<script lang="ts">
	import { Container, Sprite, Text } from 'pixi-svelte';
	import { FadeContainer, LoadingProgress } from 'components-pixi';
	import { MainContainer } from 'components-layout';
	import { stateModal } from 'state-shared';

	import { getContext } from '../game/context';
	import TransitionAnimation from './TransitionAnimation.svelte';
	import PressToContinue from './PressToContinue.svelte';

	type Props = {
		onloaded: () => void;
	};

	const props: Props = $props();
	const context = getContext();

	let loadingType = $state<'start' | 'transition'>('start');
</script>

<!-- logo and loading progress -->
<FadeContainer show={loadingType === 'start'}>
	<MainContainer>
		<Container
			x={context.stateLayoutDerived.mainLayout().width * 0.5}
			y={context.stateLayoutDerived.mainLayout().height * 0.5}
		>
			<!-- The logo is painted into the title-screen background art. -->
			{#if !context.stateApp.loaded}
				<LoadingProgress y={250} width={1967 * 0.2} height={346 * 0.2}>
					{#snippet background(sizes)}
						<Sprite key="progressBarBackground.png" {...sizes} />
					{/snippet}
					{#snippet progress(sizes)}
						<Sprite key="progressBar.png" {...sizes} />
					{/snippet}
					{#snippet frame(sizes)}
						<Sprite key="progressBarFrame.png" {...sizes} />
					{/snippet}
				</LoadingProgress>
			{/if}
		</Container>
	</MainContainer>
</FadeContainer>

<!-- press to continue (placed just below the logo) -->
<FadeContainer show={loadingType === 'start' && context.stateApp.loaded}>
	<PressToContinue
		y={context.stateLayoutDerived.mainLayout().height * 0.5 + 250}
		onpress={() => {
			if (stateModal.modal) return;
			loadingType = 'transition';
		}}
	/>
	<!-- rendered after PressToContinue so it sits on top and swallows its own presses -->
	<MainContainer alignVertical="bottom">
		<Text
			anchor={{ x: 0.5, y: 1 }}
			x={context.stateLayoutDerived.mainLayout().width * 0.5}
			y={context.stateLayoutDerived.mainLayout().height - 18}
			text="¿CÓMO GANAR?"
			eventMode="static"
			cursor="pointer"
			onpointerdown={() => (stateModal.modal = { name: 'gameRules' })}
			style={{
				fontFamily: 'proxima-nova',
				fontSize: 24,
				fontWeight: '700',
				fill: 0xffffff,
				stroke: { color: 0x3a2313, width: 5 },
			}}
		/>
	</MainContainer>
</FadeContainer>

<!-- transition between the loading screen and the game -->
<FadeContainer show={loadingType === 'transition'}>
	<TransitionAnimation oncomplete={props.onloaded} />
</FadeContainer>
