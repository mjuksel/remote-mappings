# remote-mappings

.txt files containing remote mapping info for Reason's Rack Extensions.

## added some code stuff in TypeScript, using Deno

- createDevicesTypescript.ts => create a .ts file containing an object with all the parameters/device/developer names :)
- createRemoteMap.ts => create a .remotemap file containing all the stuffs :)
- tsUsage.ts => has a simple "send midi message for every single parameter" atm.

# sendMidi.ts

sendMidi.ts contains a function "sendMIDI" which.. sends midi lol

The first value is the number of the remotable parameter, second value is the value to set the paramater to (1 to 127)
The function calculates which Midi channel it's on :)

```ts
sendMIDI(10, 64)
```

## Todo's
- add some other cool stuff like
  - presets?
  - nodejs alternative code
  - ..?
  - some cleanup perhaps