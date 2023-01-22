/**
 * Sends a MIDI Control Change message via sendmidi.exe
 * @param paramNum This number (index in Object.keys) will be used to calculate Channel and CC number.
 * @param ccValue Value to set the current parameter to.
 */
export async function sendMIDI(paramNum: number, ccValue: number) {
	const ccNumber = 1 + (paramNum % 127)
	const channelNumber = 1 + (paramNum - ccNumber) / 127

	const proc = Deno.run({
		cmd: [
			'sendmidi.exe',
			'dev',
			'loopMIDI',
			'ch',
			`${channelNumber}`,
			'cc',
			`${ccNumber}`,
			`${ccValue}`,
		],
	})
	const status = (await proc.status()).success
	Deno.close(proc.rid)
	return status
}
