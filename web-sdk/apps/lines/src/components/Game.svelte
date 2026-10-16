<script lang="ts">
	import { onMount } from 'svelte';

	import { EnablePixiExtension } from 'components-pixi';
	import { EnableHotkey } from 'components-shared';
	import { MainContainer } from 'components-layout';
	import { App, Sprite } from 'pixi-svelte';
	import { stateModal } from 'state-shared';

	import { UI } from 'components-ui-pixi';
	import { GameVersion, Modals } from 'components-ui-html';

	import { getContext } from '../game/context';
	import EnableSound from './EnableSound.svelte';
	import EnableGameActor from './EnableGameActor.svelte';
	import ResumeBet from './ResumeBet.svelte';
	import Sound from './Sound.svelte';
	import Background from './Background.svelte';
	import LoadingScreen from './LoadingScreen.svelte';
	import BoardFrame from './BoardFrame.svelte';
	import Board from './Board.svelte';
	import Anticipations from './Anticipations.svelte';
	import Win from './Win.svelte';
	import FreeSpinIntro from './FreeSpinIntro.svelte';
	import FreeSpinCounter from './FreeSpinCounter.svelte';
	import FreeSpinOutro from './FreeSpinOutro.svelte';
	import GuaroBonus from './GuaroBonus.svelte';
	import Transition from './Transition.svelte';

	const context = getContext();

	onMount(() => (context.stateLayout.showLoadingScreen = true));

	context.eventEmitter.subscribeOnMount({
		buyBonusConfirm: () => {
			stateModal.modal = { name: 'buyBonusConfirm' };
		},
	});
</script>

<App>
	<EnableSound />
	<EnableHotkey />
	<EnableGameActor />
	<EnablePixiExtension />

	<Background />

	{#if context.stateLayout.showLoadingScreen}
		<LoadingScreen onloaded={() => (context.stateLayout.showLoadingScreen = false)} />
	{:else}
		<ResumeBet />
		<!--
			The reason why <Sound /> is rendered after clicking the loading screen:
			"Autoplay with sound is allowed if: The user has interacted with the domain (click, tap, etc.)."
			Ref: https://developer.chrome.com/blog/autoplay
		-->
		<Sound />

		<MainContainer>
			<BoardFrame />
		</MainContainer>

		<MainContainer>
			<Board />
			<Anticipations />
		</MainContainer>

		<UI>
			{#snippet gameName()}
				<!-- Hidden: the logo in the corner already brands the screen. -->
			{/snippet}
			{#snippet logo()}
				<Sprite
					key="colombiano_logo"
					anchor={{ x: 1, y: 0 }}
					width={210}
					height={81}
				/>
			{/snippet}
		</UI>
		<Win />
		<GuaroBonus />
		<FreeSpinIntro />
		{#if ['desktop', 'landscape'].includes(context.stateLayoutDerived.layoutType())}
			<FreeSpinCounter />
		{/if}
		<FreeSpinOutro />
		<Transition />
	{/if}
</App>

<Modals>
	{#snippet version()}
		<GameVersion version="0.0.0" />
	{/snippet}
	{#snippet gameRules()}
		<div class="colombiano-rules">
			<h2>HOW TO WIN</h2>
			<p>
				Land <strong>3 or more matching symbols</strong> on a win line, from left to right, starting
				on the first reel. The game has <strong>5 reels</strong>, <strong>3 rows</strong> and
				<strong>20 win lines</strong>. Only the highest win per line counts, and prizes are
				multiplied by your play amount.
			</p>
			<h2><img class="pt-icon" src="./assets/sprites/colombiano/w_wild.png" alt="" /> THE COLOMBIANO (WILD)</h2>
			<p>
				The paisa gentleman substitutes for every symbol except the guaro bottle, and he is also
				the highest-winning symbol.
			</p>
			<h2><img class="pt-icon" src="./assets/sprites/colombiano/s_guaro.png" alt="" /> FIND THE GUARO! (BONUS)</h2>
			<p>
				Land <strong>3, 4 or 5 guaro bottles</strong> anywhere to enter the cantina with
				<strong>3, 4 or 5 picks</strong>. Every bottle you pick reveals a coin prize; the last one
				reveals the <strong>golden Guaro</strong> and ends the bonus. You win the sum of every
				prize revealed!
			</p>
			<h2>GET BONUS</h2>
			<p>Instantly trigger the bonus feature for <strong>100× your play amount</strong>.</p>
			<h2>HOW TO PLAY</h2>
			<ul class="controls">
				<li><strong>PLAY</strong> — start a round at the current play amount. The space bar does the same.</li>
				<li><strong>+ / −</strong> — raise or lower your play amount. Tap the amount itself to pick from the full list.</li>
				<li><strong>AUTO SPIN</strong> — play a set number of rounds automatically. Choose the count, and optional loss and single-win limits, then confirm to start. Autoplay stops on any limit you set.</li>
				<li><strong>TURBO</strong> — speed up the reels.</li>
				<li><strong>GET BONUS</strong> — buy straight into the bonus feature. A confirmation step shows the cost before anything is spent.</li>
				<li><strong>MENU</strong> — open the prize table, this information screen, sound and game settings.</li>
				<li>During <strong>Find the Guaro!</strong>, tap any bottle on the shelf to reveal its prize.</li>
			</ul>

			<h2>GAME INFO</h2>
			<p>RTP: 96.70% &nbsp;·&nbsp; Max win: 5,000× your play amount</p>

			<p class="disclaimer">
				Malfunction voids all wins and plays. A consistent internet connection is required. In the
				event of a disconnection, reload the game to finish any uncompleted rounds. The expected
				return is calculated over many plays. The game display is not representative of any physical
				device and is for illustrative purposes only. Winnings are settled according to the amount
				received from the Remote Game Server and not from events within the web browser. TM and ©
				2026 Engine.
			</p>
		</div>
	{/snippet}
	{#snippet payTable()}
		<div class="colombiano-rules">
			<h2>PRIZE TABLE</h2>
			<p>Prizes in play-amount multiples, per line (×3 / ×4 / ×5 symbols):</p>
			<table class="colombiano-paytable">
				<thead>
					<tr><th>Symbol</th><th>×3</th><th>×4</th><th>×5</th></tr>
				</thead>
				<tbody>
					<tr><td><img class="pt-icon" src="./assets/sprites/colombiano/w_wild.png" alt="" /> The Colombiano (Wild)</td><td>10</td><td>20</td><td>50</td></tr>
					<tr><td><img class="pt-icon" src="./assets/sprites/colombiano/h1_condor.png" alt="" /> Condor</td><td>10</td><td>20</td><td>50</td></tr>
					<tr><td><img class="pt-icon" src="./assets/sprites/colombiano/h2_esmeralda.png" alt="" /> Emerald</td><td>3</td><td>5</td><td>15</td></tr>
					<tr><td><img class="pt-icon" src="./assets/sprites/colombiano/h3_sombrero.png" alt="" /> Sombrero Vueltiao</td><td>2</td><td>3</td><td>10</td></tr>
					<tr><td><img class="pt-icon" src="./assets/sprites/colombiano/h4_acordeon.png" alt="" /> Accordion</td><td>1</td><td>2</td><td>8</td></tr>
					<tr><td><img class="pt-icon" src="./assets/sprites/colombiano/l1_cafe.png" alt="" /> Coffee</td><td>0.5</td><td>1</td><td>5</td></tr>
					<tr><td><img class="pt-icon" src="./assets/sprites/colombiano/l2_arepa.png" alt="" /> Arepa</td><td>0.3</td><td>0.7</td><td>3</td></tr>
					<tr><td><img class="pt-icon" src="./assets/sprites/colombiano/l3_chiva.png" alt="" /> Chiva Bus</td><td>0.3</td><td>0.7</td><td>3</td></tr>
					<tr><td><img class="pt-icon" src="./assets/sprites/colombiano/l4_mochila.png" alt="" /> Mochila Bag</td><td>0.2</td><td>0.5</td><td>2</td></tr>
					<tr><td><img class="pt-icon" src="./assets/sprites/colombiano/l5_lulo.png" alt="" /> Lulo</td><td>0.1</td><td>0.3</td><td>1</td></tr>
				</tbody>
			</table>
			<p>
				<img class="pt-icon" src="./assets/sprites/colombiano/s_guaro.png" alt="" />
				<strong>Guaro bottle (Scatter):</strong> 3 or more bottles anywhere trigger the FIND THE
				GUARO! bonus.
			</p>
		</div>
	{/snippet}
</Modals>

<style>
	.colombiano-rules {
		max-width: 40rem;
		padding: 0 1rem 1rem;
		line-height: 1.5;
	}
	.colombiano-rules h2 {
		color: #ffd24a;
		font-size: 1.1rem;
		margin: 1.2rem 0 0.3rem;
	}
	.colombiano-rules p {
		margin: 0.3rem 0;
	}
	.colombiano-paytable {
		width: 100%;
		border-collapse: collapse;
		margin: 0.5rem 0;
	}
	.colombiano-paytable th,
	.colombiano-paytable td {
		border: 1px solid rgba(255, 210, 74, 0.35);
		padding: 0.35rem 0.6rem;
		text-align: center;
	}
	.colombiano-paytable td:first-child {
		text-align: left;
	}
	.colombiano-paytable th {
		color: #ffd24a;
	}
	.colombiano-rules .controls {
		margin: 0.3rem 0;
		padding-left: 1.1rem;
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
		text-align: left;
	}
	.colombiano-rules .disclaimer {
		margin-top: 1.5rem;
		padding-top: 0.9rem;
		border-top: 1px solid rgba(255, 210, 74, 0.3);
		font-size: 0.8rem;
		line-height: 1.45;
		opacity: 0.75;
	}
	.colombiano-rules :global(.pt-icon) {
		width: 42px;
		height: 42px;
		vertical-align: middle;
		margin-right: 0.4rem;
	}
</style>
