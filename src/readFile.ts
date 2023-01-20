import { regger, format } from './deps.ts'

export async function readRemoteInfoTxt(file: string) {
	const txt = format(await Deno.readTextFile(file))
		.replace(regger, '')
		.split('\n')
		.filter(Boolean)

	const [developer, device] = txt[2].split('\t')
	const params = txt
		.slice(4)
		.map(p => p.replace(/^(.*)\t-?\d*\t(\d+)\t.+/, '			"$1": $2'))
		.join(',\n')

	const tsText = `	'${device}': {
		developer: '${developer}',
		device: '${device}',
		params: {
${params}
		}
	},
`

	return tsText
}
