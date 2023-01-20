import { readRemoteInfoTxt } from './src/deps.ts'

const categories = ['Effects', 'Instruments', 'Players', 'Utilities']

async function readDirs(cat: string[]) {
	const devices: string[] = []
	for (const c of cat) {
		for await (const d of Deno.readDirSync(c)) {
			devices.push(await readRemoteInfoTxt(`${c}/${d.name}`))
		}
	}
	// for some "reason" there are duplicates, using the Set removes them easily.
	return [...new Set(devices)]
}

const dev = (await readDirs(categories)).sort()

const ReasonDevicesTS = `export const Devices = {\n${dev.join('')}}`

Deno.writeTextFileSync('ReasonDevices.ts', ReasonDevicesTS)
