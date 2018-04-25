
# PUBG TypeScript API

[![Join the chat at https://gitter.im/pubg-typescript-api/Lobby](https://badges.gitter.im/pubg-typescript-api/Lobby.svg)](https://gitter.im/pubg-typescript-api/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![npm version](https://badge.fury.io/js/pubg-typescript-api.svg)](https://www.npmjs.com/package/pubg-typescript-api)

## About
Unofficial TypeScript wrapper on the official PUBG API.

**Main features**:

- Simple to use
- Maps API resources to *easier-to-use* "Models" (i.e. `Player`, `Match`, `Participant`, etc.)
- OOP design
- Fully typed
- ~~Helps you win chicken dinners~~

## Getting started

First, obtain an API key from [PUBG Official API](https://developer.playbattlegrounds.com/).

Then install the package with NPM:
```
npm install --save pubg-typescript-api
```

## Usage example

As an example, let's make a command line utility to display some quick **stats on a player's last match**.

Import the module and define `API_KEY` with your own API key obtained from the official website.
Obviously the required classes depend on what you're doing, but in this case we need these

```typescript
import { Match, PlatformRegion, Player, PubgAPI } from 'pubg-typescript-api';

const API_KEY = 'YOUR_API_KEY_HERE';
```

First, instantiate the `PubgAPI` object, responsible for making requests to the API authenticated with your API key

```typescript
const api = new PubgAPI(API_KEY, PlatformRegion.PC_EU);
```

here we used the Platform and Region `PC_EU`, but you're obviously free to change it to whatever you need. The possible values can be found in the `PlatformRegion` enum.

This object must be given to all methods that retrieve data from the API. For example, let's find the player corresponding to the username "martinsileno"

```typescript
const players = await Player.filterByName(api, ['martinsileno']);
const player = players[0];
console.log(`Found player "${player.name}" with ID: ${player.id}`);
```

here we're *awaiting* on the Promise returned by `filterByName`, a function that returns a (promise of a) list of Players with the given names.

Now that we have our player's data, let's find stats on his/her last played match

```typescript
const lastMatchId = player.matchIds[0];
const match = await Match.get(api, lastMatchId);
console.log(`Last played match on ${match.dateCreated} and lasted ${Math.round(match.duration / 60)} minutes, with ID: ${match.id}`);
```

here we extract the latest match ID from `player.matchIds` (it's sorted from newest to oldest) and then using it as argument for `Match.get`, a function that returns a promise of a `Match` object. So by *awaiting* on that, we get our match data.

The last step before running our simple example is to get the player's stats in this Match.

```typescript
const participant = match.getParticipantByName('martinsileno');
if (!participant) {
  console.error('Player not found in participants');
  return;
}
console.log(`${participant.name} placed #${participant.winPlace} out of ${match.participants.length} on ${match.map}`);
console.log('his stats: ');
console.log(`kills ${participant.kills}`);
console.log(`damage ${participant.damageDealt}`);
console.log(`assists ${participant.assists}`);
console.log(`headshot kills ${participant.headshotKills}`);
console.log(`total distance ${participant.totalDistance}m`);
```

to get a player's stats in a `Match` we use the method `getParticipantByName`, which returns the corresponding `Participant` object.

The `Participant` instances contain details on players in a `Match`, see the public getters in the class to find more.

And we're done, we can run our example to see if it works, the output should look like

```
$ node dist/main.js
Found player "martinsileno" with ID: account.a540a32a49784025939a975b45e86bfe
Last played match on Sun Apr 22 2018 00:33:20 GMT+0200 (W. Europe Daylight Time) and lasted 32 minutes, with ID: a6d8d8f7-a3c4-4b1c-9947-8df40c144283
martinsileno placed #1 out of 92 on Desert_Main
his stats:
kills 2
damage 376.501
assists 3
headshot kills 1
total distance 3915.62m
```

## License

MIT
