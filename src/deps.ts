export { readRemoteInfoTxt } from './readFile.ts'
export { regger } from './badWords.ts'
export { sendMIDI } from './sendMidi.ts'

/** Get keys for given object as array of the literal values */
export const objKeys = <Obj>(object: Obj): (keyof Obj)[] =>
	Object.keys(object) as (keyof Obj)[]

/** Get random number between min and max */
export const numBetween = (min: number, max: number) =>
	Math.round(Math.random() * (max - min)) + min

/** Get random value from steps, using min and max */
export const getRandomValueMinMax = (min: number, max: number, steps: number) =>
	~~((127 / steps) * numBetween(min, max))

/** Get random value from steps. */
export const getRandomValue = (steps: number) => {
	// steps > 127 && (steps = 127)
	return ~~(
		(127 / steps > 127 ? 127 : steps) * Math.round(Math.random() * steps)
	)
}

/** removes '\r' */
export const format = (str: string) => str.replace(/\r?\n/g, '\n')
