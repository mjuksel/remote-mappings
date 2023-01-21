# remote-mappings

.txt files containing remote mapping info for Reason's Rack Extensions.

---

## Added some code stuff in TypeScript, using Deno

- [createDevicesTypescript.ts](./createDevicesTypescript.ts) => create a .ts file containing an object with all the parameters/device/developer names :)
- [createRemoteMap.ts](./createRemoteMap.ts) => create a .remotemap file containing all the stuffs :)
- [tsUsage.ts](./tsUsage.ts) => has a simple "send midi message for every single parameter" atm.
- i use sendmidi from gbevin: [SendMIDI](https://github.com/gbevin/SendMIDI)
- i also use LoopMIDI to provide virtual MIDI connection: [LoopMIDI](https://www.tobias-erichsen.de/software/loopmidi.html)

Video showing what this does: https://youtu.be/ysccauTkKKs

---

## src/sendMidi.ts

sendMidi.ts contains a function "sendMIDI" which.. sends midi lol

The first value is the number of the remotable parameter, second value is the value to set the paramater to (1 to 127)

```ts
sendMIDI(10, 64)
```

The function calculates which Midi channel it's on :)

```ts
// if paramater number is 456
ccNumber = 456 % 127 // 75 on channel 4
channelNumber = 1 + (paramNum - ccNumber) / 127 // 4
```

---

## Todo's

- add some other cool stuff like
  - presets?
  - UI/application
  - nodejs alternative code
  - ..?
  - some cleanup perhaps

---

## Instructions to use this stuff

- install [Deno](https://deno.land/manual@v1.29.4/getting_started/installation)
- install [Deno vscode extension](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno)
- download and install [LoopMIDI](https://www.tobias-erichsen.de/software/loopmidi.html)
- download and add [SendMIDI](https://github.com/gbevin/SendMIDI) to your PATH.
- add/remove .txt files from each categories, so they reflect the devices you own.
  - remove `ReasonDevices.ts` and re-build it by running `deno run ./createDevicesTypescript.ts`
  - remove `MIDI Controller Multi.remotemap` and re-build it by running `deno run ./createRemoteMap.ts`
  - place `MIDI Controller Multi.remotemap` in `Propellerhead/Reason 12/Remote/DefaultMaps/Other`
- start editing [tsUsage.ts](./tsUsage.ts)

```ts
// change this guy to whatever device you are working on, has auto-complete from the "database"
let currentDevice = Devices['se.propellerheads.Europa']
```

```ts
deviceParams.forEach((value, index) => {
  // here we could filter parameters, we get auto-complete from typescript \o /
  if (value === 'Osc1 Wave' || value === 'Filter Freq') {
    // only randomize parameters that include "Osc1"
    sendMIDI(index, getRandomValue(currentDevice.params[value]))
  }
})
```
