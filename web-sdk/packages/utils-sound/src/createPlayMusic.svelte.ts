import type { Howl } from 'howler';

import type { PlayOptions, GetSound, GetSoundMap } from './types';

const FADE_OUT_MS = 400;
const FADE_IN_MS = 650;
const SWITCH_GAP_MS = FADE_OUT_MS + 80;

export function createPlayMusic<TSoundName extends string>(options: {
	howl: Howl;
	newSound: (value: TSoundName) => GetSound<TSoundName>;
	getSoundMap: () => GetSoundMap<TSoundName>;
	initSoundVolume: (soundName: TSoundName) => void;
}) {
	type Sound = GetSound<TSoundName>;

	// Tracks with different tempos must never overlap (it sounds like the
	// music lurches), so switches are sequential: fade the old track out,
	// wait a beat, then fade the new one in. The token cancels a queued
	// start when another switch happens first.
	let switchToken = 0;
	const pauseTimers = new Map<TSoundName, ReturnType<typeof setTimeout>>();

	const clearPendingPause = (soundName: TSoundName) => {
		const timer = pauseTimers.get(soundName);
		if (timer) {
			clearTimeout(timer);
			pauseTimers.delete(soundName);
		}
	};

	const fadeOutAllMusic = () => {
		(Object.values(options.getSoundMap()) as Sound[]).forEach((existingSound) => {
			if (existingSound.soundState !== 'playing') return;
			const currentVolume = Number(options.howl.volume(existingSound.soundId)) || 1;
			options.howl.fade(currentVolume, 0, FADE_OUT_MS, existingSound.soundId);
			clearPendingPause(existingSound.soundName);
			pauseTimers.set(
				existingSound.soundName,
				setTimeout(() => options.howl.pause(existingSound.soundId), FADE_OUT_MS),
			);
			options.getSoundMap()[existingSound.soundName] = {
				...existingSound,
				soundState: 'paused',
			};
		});
	};

	const fadeIn = (soundName: TSoundName, soundId: number) => {
		options.initSoundVolume(soundName);
		const targetVolume = Number(options.howl.volume(soundId)) || 1;
		options.howl.volume(0, soundId);
		options.howl.fade(0, targetVolume, FADE_IN_MS, soundId);
	};

	const startAfterFadeOut = (start: () => void) => {
		const token = ++switchToken;
		setTimeout(() => {
			if (token === switchToken) start();
		}, SWITCH_GAP_MS);
	};

	const newMusic = (sound: Sound) => {
		fadeOutAllMusic();
		clearPendingPause(sound.soundName);
		startAfterFadeOut(() => {
			const soundId = options.howl.play(sound.soundName);
			options.getSoundMap()[sound.soundName] = {
				...sound,
				soundId,
				soundState: 'playing',
			};
			fadeIn(sound.soundName, soundId);
		});
	};

	const resumeMusic = (sound: Sound) => {
		fadeOutAllMusic();
		clearPendingPause(sound.soundName);
		startAfterFadeOut(() => {
			options.howl.play(sound.soundId);
			options.getSoundMap()[sound.soundName] = {
				...sound,
				soundState: 'playing',
			};
			fadeIn(sound.soundName, sound.soundId);
		});
	};

	const soundPlayMap = {
		new: (sound: Sound) => newMusic(sound),
		paused: (sound: Sound) => resumeMusic(sound),
		playing: (_: Sound) => {
			// Do nothing
		},
	};

	const play = (playOptions: PlayOptions<TSoundName>) => {
		const existingSound = options.getSoundMap()[playOptions.name];
		const sound = existingSound ?? options.newSound(playOptions.name);
		soundPlayMap[sound.soundState](sound);
	};

	return {
		play,
	};
}
