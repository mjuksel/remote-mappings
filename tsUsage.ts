import { Devices } from './ReasonDevices.ts'
import { sendMIDI, getRandomValue, objKeys } from './src/deps.ts'

const currentDevice = Devices['se.propellerheads.Europa']

const deviceParams = objKeys(currentDevice.params)

/**
 * Loop over all parameters, sending random value to all of them.
 */
deviceParams.forEach((value, index) => {
	if (
		value === 'Osc1 Wave' ||
		value === 'Osc1 Shape' ||
		value === 'Osc2 Wave' ||
		value === 'Osc2 Shape' ||
		value === 'Osc3 Wave' ||
		value === 'Osc3 Shape'
	) {
		sendMIDI(index, getRandomValue(currentDevice.params[value]))
	}
})
