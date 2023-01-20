import { Devices } from './ReasonDevices.ts'
import { objKeys } from './src/deps.ts'

const Europa = Devices['se.propellerheads.Europa']
const EuropaParams = objKeys(Europa.params)

// Could do similar things here for use with NodeJS.
// Someone create a pull request for this or something, since i kinda use Deno only.