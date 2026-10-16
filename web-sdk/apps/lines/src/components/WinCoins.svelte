<script lang="ts">
	import { Container, ParticleEmitter } from 'pixi-svelte';
	import { MainContainer } from 'components-layout';
	import { fountain as baseConfig } from 'constants-shared/particleConfig';
	import { LEVEL_PARTICLE_COIN_MAP } from 'constants-shared/particleCoin';

	import { getContext } from '../game/context';
	import type { WinLevelAlias } from '../game/winLevelMap';

	type Props = {
		emit?: boolean;
		levelAlias?: WinLevelAlias;
	};

	// The stock particle scales assume a small coin sprite; the emerald symbol
	// art is 512px, so everything is brought down proportionally while keeping
	// the per-win-level variation intact.
	const ART_SCALE = 0.38;

	const props: Props = $props();
	const context = getContext();
	const extraConfig = $derived(
		props?.levelAlias ? LEVEL_PARTICLE_COIN_MAP[props.levelAlias] : null,
	);
	const merged = $derived({ ...baseConfig, ...extraConfig });
	const config = $derived({
		...merged,
		scale: {
			...merged.scale,
			start: (merged.scale?.start ?? 0.3) * ART_SCALE,
			end: (merged.scale?.end ?? 0.4) * ART_SCALE,
		},
	});
</script>

{#if config}
	<MainContainer>
		<Container
			x={context.stateGameDerived.boardLayout().x}
			y={context.stateGameDerived.boardLayout().y}
		>
			<ParticleEmitter {config} key="colombiano_h2" emit={props.emit} />
		</Container>
	</MainContainer>
{/if}
