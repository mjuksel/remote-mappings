import { Devices } from './ReasonDevices.ts'
import { sendMIDI, getRandomValue, objKeys } from './src/deps.ts'

let currentDevice = Devices['se.propellerheads.Europa']

// let deviceParams = Object.keys(currentDevice['params'])
let deviceParams = objKeys(currentDevice.params)

/**
 * Loop over all parameters, sending random value to all of them.
 */
deviceParams.forEach((value, index) => {
	sendMIDI(index, getRandomValue(currentDevice.params[value]))
})
