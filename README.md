# remote-mappings

.txt files containing remote mapping info for Reason's Rack Extensions.

---

## Added some code stuff in TypeScript, using Deno

- createDevicesTypescript.ts => create a .ts file containing an object with all the parameters/device/developer names :)
- createRemoteMap.ts => create a .remotemap file containing all the stuffs :)
- tsUsage.ts => has a simple "send midi message for every single parameter" atm.

- i use sendmidi from gbevin: https://github.com/gbevin/SendMIDI
  - add this to PATH !

- i also use LoopMIDI to provide virtual MIDI connection: https://www.tobias-erichsen.de/software/loopmidi.html
  - i've named the MIDI connection "loopMIDI" (sendMidi.ts, line 14)

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