/**
 * Here is a simple regex filter to exclude some lines found in the Remote Info txt files.
 */

const BadWords: string = [
	// ignore device/patch name, select patch, record sample etc
	'\\t-', '--', '0\\t0',

	// standard ignore set for instruments
	'Breath Control', 'Expression', 'Sustain Pedal', 'Aftertouch', 'Pitch Bend',

	// ignore subby bandwidth feat
	'Low Bandwidth On/Off',

	// ignore Mod Wheel, but not Mod Wheel modulation stuff
	'Mod Wheel',
].join('|')

export const regger = new RegExp(`.*(^Enabled|(${BadWords})\\t).*`, 'gm')
