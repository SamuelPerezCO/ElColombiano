export default {
	H1: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols/symbols.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols/h1.json', import.meta.url).href,
			scale: 2,
		},
	},
	H2: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols/symbols.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols/h2.json', import.meta.url).href,
			scale: 2,
		},
	},
	H3: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols/symbols.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols/h3.json', import.meta.url).href,
			scale: 2,
		},
	},
	H4: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols/symbols.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols/h4.json', import.meta.url).href,
			scale: 2,
		},
	},
	H5: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols/symbols.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols/h5.json', import.meta.url).href,
			scale: 2,
		},
	},
	L1: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols/symbols.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols/l1.json', import.meta.url).href,
			scale: 2,
		},
	},
	L2: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols/symbols.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols/l2.json', import.meta.url).href,
			scale: 2,
		},
	},
	L3: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols/symbols.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols/l3.json', import.meta.url).href,
			scale: 2,
		},
	},
	L4: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols/symbols.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols/l4.json', import.meta.url).href,
			scale: 2,
		},
	},
	M: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols2/symbols2.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols2/M.json', import.meta.url).href,
			scale: 2,
		},
	},
	S: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols2/symbols2.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols2/S.json', import.meta.url).href,
			scale: 2,
		},
	},
	explosion: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols3/symbols3.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols3/explosion.json', import.meta.url).href,
			scale: 2,
		},
	},
	W: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols3/symbols3.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols3/W.json', import.meta.url).href,
			scale: 2,
		},
	},
	reelsFrame: {
		type: 'sprites',
		src: new URL('../../assets/sprites/reelsFrame/reels_frame.json', import.meta.url).href,
	},
	payFrame: {
		type: 'sprite',
		src: new URL('../../assets/sprites/payFrame/payFrame.png', import.meta.url).href,
	},
	anticipation: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/anticipation/anticipation.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/anticipation/anticipation.json', import.meta.url).href,
			scale: 2,
		},
	},
	goldFont: {
		type: 'font',
		src: new URL('../../assets/fonts/goldFont/mm_gold.xml', import.meta.url).href,
	},
	goldBlur: {
		type: 'font',
		src: new URL('../../assets/fonts/goldBlur/miningfont_gold_blur.xml', import.meta.url).href,
	},
	silverFont: {
		type: 'font',
		src: new URL('../../assets/fonts/silverFont/mm_silver.xml', import.meta.url).href,
	},
	purpleFont: {
		type: 'font',
		src: new URL('../../assets/fonts/purpleFont/mm_purple.xml', import.meta.url).href,
	},
	bigwin: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/bigwin/big_wins.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/bigwin/mm_bigwin.json', import.meta.url).href,
			scale: 2,
		},
	},
	globalMultiplier: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/globalMultiplier/multiframe.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/globalMultiplier/multiframe.json', import.meta.url).href,
			scale: 2,
		},
	},
	fsIntro: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/fsIntro/fs_screen.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/fsIntro/fs_screen.json', import.meta.url).href,
			scale: 2,
		},
	},
	fsIntroNumber: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/fsIntro/fs_screen.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/fsIntro/fs_screen_number.json', import.meta.url).href,
			scale: 2,
		},
	},
	fsOutroNumber: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/fsIntro/fs_screen.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/fsIntro/fs_total_number.json', import.meta.url).href,
			scale: 2,
		},
	},
	tumble_multiplier: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/tumbleWin/tumble_win.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/tumbleWin/tumble_multiplier.json', import.meta.url).href,
			scale: 2,
		},
	},
	tumble_win: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/tumbleWin/tumble_win.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/tumbleWin/tumble_win.json', import.meta.url).href,
			scale: 2,
		},
	},
	reelhouse: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/reelhouse/reelhouse_glow.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/reelhouse/reelhouse_glow.json', import.meta.url).href,
			scale: 2,
		},
	},
	progressBar: {
		type: 'sprites',
		src: new URL('../../assets/sprites/progressBar/progressBar.json', import.meta.url).href,
		preload: true,
	},
	freeSpins: {
		type: 'sprites',
		src: new URL('../../assets/sprites/freeSpins/freeSpins.json', import.meta.url).href,
	},
	winSmall: {
		type: 'sprites',
		src: new URL('../../assets/sprites/winSmall/MM_Localisation_winsmall.json', import.meta.url).href,
	},
	clusterWin: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/clusterWin/clusterpay.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/clusterWin/clusterpay.json', import.meta.url).href,
			scale: 2,
		},
	},
	symbolsStatic: {
		type: 'sprites',
		src: new URL('../../assets/sprites/symbolsStatic/symbolsStatic.json', import.meta.url).href,
	},
	coins: {
		type: 'spriteSheet',
		src: new URL('../../assets/sprites/coin/SD2_Coin.json', import.meta.url).href,
	},
	sound: {
		type: 'audio',
		src: new URL('../../assets/audio/sounds.json', import.meta.url).href,
		preload: true,
	},
	// El Colombiano theme art
	colombiano_w: {
		type: 'sprite',
		src: new URL('../../assets/sprites/colombiano/w_wild.png', import.meta.url).href,
	},
	colombiano_s: {
		type: 'sprite',
		src: new URL('../../assets/sprites/colombiano/s_guaro.png', import.meta.url).href,
	},
	colombiano_h1: {
		type: 'sprite',
		src: new URL('../../assets/sprites/colombiano/h1_condor.png', import.meta.url).href,
	},
	colombiano_h2: {
		type: 'sprite',
		src: new URL('../../assets/sprites/colombiano/h2_esmeralda.png', import.meta.url).href,
	},
	colombiano_h3: {
		type: 'sprite',
		src: new URL('../../assets/sprites/colombiano/h3_sombrero.png', import.meta.url).href,
	},
	colombiano_h4: {
		type: 'sprite',
		src: new URL('../../assets/sprites/colombiano/h4_acordeon.png', import.meta.url).href,
	},
	colombiano_l1: {
		type: 'sprite',
		src: new URL('../../assets/sprites/colombiano/l1_cafe.png', import.meta.url).href,
	},
	colombiano_l2: {
		type: 'sprite',
		src: new URL('../../assets/sprites/colombiano/l2_arepa.png', import.meta.url).href,
	},
	colombiano_l3: {
		type: 'sprite',
		src: new URL('../../assets/sprites/colombiano/l3_chiva.png', import.meta.url).href,
	},
	colombiano_l4: {
		type: 'sprite',
		src: new URL('../../assets/sprites/colombiano/l4_mochila.png', import.meta.url).href,
	},
	colombiano_l5: {
		type: 'sprite',
		src: new URL('../../assets/sprites/colombiano/l5_lulo.png', import.meta.url).href,
	},
	colombiano_bottle_closed: {
		type: 'sprite',
		src: new URL('../../assets/sprites/colombiano/bottle_closed.png', import.meta.url).href,
	},
	colombiano_bottle_golden: {
		type: 'sprite',
		src: new URL('../../assets/sprites/colombiano/bottle_golden.png', import.meta.url).href,
	},
	colombiano_logo: {
		type: 'sprite',
		src: new URL('../../assets/sprites/colombiano/logo.png', import.meta.url).href,
		preload: true,
	},
	colombiano_bg_base: {
		type: 'sprite',
		src: new URL('../../assets/sprites/colombiano/bg_base.jpg', import.meta.url).href,
		preload: true,
	},
	colombiano_bg_bonus: {
		type: 'sprite',
		src: new URL('../../assets/sprites/colombiano/bg_bonus.jpg', import.meta.url).href,
	},
	colombiano_bg_loading: {
		type: 'sprite',
		src: new URL('../../assets/sprites/colombiano/bg_loading.jpg', import.meta.url).href,
		preload: true,
	},
	colombiano_title_screen: {
		type: 'sprite',
		src: new URL('../../assets/sprites/colombiano/title_screen.jpg', import.meta.url).href,
		preload: true,
	},
	colombiano_ui_plate: {
		type: 'sprite',
		src: new URL('../../assets/sprites/colombiano/ui_plate.png', import.meta.url).href,
	},
	colombiano_ui_btn_round: {
		type: 'sprite',
		src: new URL('../../assets/sprites/colombiano/ui_btn_round.png', import.meta.url).href,
	},
	colombiano_ui_btn_round_active: {
		type: 'sprite',
		src: new URL('../../assets/sprites/colombiano/ui_btn_round_active.png', import.meta.url).href,
	},
	colombiano_ui_btn_spin: {
		type: 'sprite',
		src: new URL('../../assets/sprites/colombiano/ui_btn_spin.png', import.meta.url).href,
	},
	colombiano_ui_btn_buybonus: {
		type: 'sprite',
		src: new URL('../../assets/sprites/colombiano/ui_btn_buybonus.png', import.meta.url).href,
	},
	colombiano_ui_btn_small: {
		type: 'sprite',
		src: new URL('../../assets/sprites/colombiano/ui_btn_small.png', import.meta.url).href,
	},
} as const;
