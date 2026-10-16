<script lang="ts">
	import { Rectangle, Sprite } from 'pixi-svelte';
	import { FadeContainer } from 'components-pixi';
	import { SECOND } from 'constants-shared/time';

	import { getContext } from '../game/context';

	const context = getContext();

	// Source art dimensions of the background images.
	const BG_WIDTH = 1376;
	const BG_HEIGHT = 768;

	const canvasSizes = $derived(context.stateLayoutDerived.canvasSizes());
	// Cover-fit: scale the image so it always fills the whole canvas.
	const coverScale = $derived(Math.max(canvasSizes.width / BG_WIDTH, canvasSizes.height / BG_HEIGHT));
	const bgProps = $derived({
		anchor: 0.5,
		x: canvasSizes.width * 0.5,
		y: canvasSizes.height * 0.5,
		width: BG_WIDTH * coverScale,
		height: BG_HEIGHT * coverScale,
	});

	const showLoadingBackground = $derived(context.stateLayout.showLoadingScreen);
	const showBaseBackground = $derived(
		context.stateGame.gameType === 'basegame' && !showLoadingBackground,
	);
	const showFeatureBackground = $derived(context.stateGame.gameType === 'freegame');
</script>

<Rectangle {...context.stateLayoutDerived.canvasSizes()} backgroundColor={0x000000} zIndex={-3} />

<!-- The game draws its own board panel, so the base game uses the clean
     landscape (the painted-panel variant would double up with it). -->
<FadeContainer show={showBaseBackground} duration={SECOND} zIndex={-2}>
	<Sprite key="colombiano_bg_loading" {...bgProps} />
</FadeContainer>

<FadeContainer show={showFeatureBackground} duration={SECOND} zIndex={-1}>
	<Sprite key="colombiano_bg_bonus" {...bgProps} />
</FadeContainer>

<FadeContainer show={showLoadingBackground} duration={SECOND} zIndex={-1}>
	<Sprite key="colombiano_title_screen" {...bgProps} />
</FadeContainer>
