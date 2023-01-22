export { readRemoteInfoTxt } from './readFile.ts'
export { regger } from './badWords.ts'
export { sendMIDI } from './sendMidi.ts'

/** Get keys for given object as array of the literal values */
export const objKeys = <Obj>(object: Obj): (keyof Obj)[] =>
	Object.keys(object) as (keyof Obj)[]

/** Get random value from steps. */
export const getRandomValue = (steps: number) =>
	~~((127 / steps) * (Math.random() * steps))

/** removes '\r' */
export const format = (str: string) => str.replace(/\r?\n/g, '\n')
