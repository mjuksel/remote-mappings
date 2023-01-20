import { Devices } from './ReasonDevices.ts'
import { objKeys } from './src/deps.ts'

export const allDeviceNames = objKeys(Devices)

export const remotemap = allDeviceNames.map(device => {
		const developerName = Devices[device]['developer']
		const params = objKeys(Devices[device]['params'])

		const scope = `Scope	${developerName}	${device}
//	Control Surface Item	Key	Remotable Item	Scale	Mode
${params.map((param, index) => {
	const ccNumber = index % 127
	const channelNumber = 1 + (index - ccNumber) / 127

	return `Map	Ch${channelNumber}-CC ${`${ccNumber + 1}`.padStart(2, '0')}		${param}`
	})
	.join('\n')}

`
	return scope
	})
	.join('')

// console.log(remotemap)
Deno.writeTextFileSync(
	'AllDevices.remotemap',
	`Propellerhead Remote Mapping File
File Format Version	1.0.0
Control Surface Manufacturer	<Other>
Control Surface Model	MIDI Multichannel Control Surface
Map Version	1.4.2

${remotemap}`
)
