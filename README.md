
# PUBG TypeScript API

[![Join the chat at https://gitter.im/pubg-typescript-api/Lobby](https://badges.gitter.im/pubg-typescript-api/Lobby.svg)](https://gitter.im/pubg-typescript-api/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![npm version](https://badge.fury.io/js/pubg-typescript-api.svg)](https://www.npmjs.com/package/pubg-typescript-api)

## About
TypeScript wrapper on official PUBG API.

## Getting started

First, obtain an API key from [PUBG Official API](https://developer.playbattlegrounds.com/).

Then install the package with NPM:
```
npm install --save pubg-typescript-api
```

## Example

As an example, let's make a command line utility to display some quick **stats on a player's last match**.

Import the module and define your `API_KEY` obtained from the official website  
obviously the required classes depend on what you're doing, but in this case we need these

```typescript
import { MatchesPubgAPI, Participant, PlatformRegion, PlayersPubgAPI } from 'pubg-typescript-api';

const API_KEY = 'YOUR_API_KEY_HERE';
```

Define a function that will retrieve a player's data from the API:

```typescript
async function getPlayer(name: string) {
  const playersAPI = new PlayersPubgAPI(API_KEY, PlatformRegion.PC_EU);
  const apiResult = await playersAPI.listByName([name]);
  const playersList = apiResult.data.data;
  if (playersList.length === 0) {
    console.error('Player not found');
    return;
  }
  return playersList[0];
}
```

Returned value is fully typed and all its values correspond to the schema defined on the [Player model](https://documentation.playbattlegrounds.com/en/players.html) on the official API.

Once we have the player, we need his/her latest match. For this we instantiate the `MatchesPubgAPI` object and use the `get` method:

```typescript
async function getMatch(id: string) {
  const matchesAPI = new MatchesPubgAPI(API_KEY, PlatformRegion.PC_EU);
  const apiResult = await matchesAPI.get(id);
  return apiResult.data;
}
```

Again, the result is fully typed and corresponds to the official [Match model](https://documentation.playbattlegrounds.com/en/matches.html).

Now that we have these short helper functions, let's parse the data to get what we need.

First thing to do is call the functions and store their results in `playerData` and `matchData`

```typescript
  const playerData = await getPlayer('martinsileno');
  if (!playerData) {
    return;
  }
  const lastMatch = playerData.relationships!.matches.data[0];
  const matchData = await getMatch(lastMatch.id);
```

extract an array of `Participant` objects, and among these, find our player

```typescript
  const participants = matchData.included.filter(obj => obj.type === 'participant') as Participant[];
  const playerParticipant = participants.find(obj => obj.attributes.stats.playerId === playerData.id);
  if (!playerParticipant) {
    console.error('Something went wrong, could not find player in participants');
    return;
  }
```

now that we have our `playerParticipant` object, we have access to his/her stats

```typescript
  console.log(`${playerData.attributes.name} placed #${playerParticipant.attributes.stats.winPlace} out of ${participants.length} on ${matchData.data.attributes.mapName} in a match that started at ${matchData.data.attributes.createdAt} and lasted ${Math.round(matchData.data.attributes.duration / 60)} minutes`);
  console.log('his full match stats: ', playerParticipant.attributes.stats);
```

```
$ node dist/main.js
martinsileno placed #1 out of 92 on Desert_Main in a match that started at 2018-04-21T22:33:20Z and lasted 32 minutes
his full match stats:  
```
```js
{ DBNOs: 2,   assists: 3,  boosts: 4,  damageDealt: 376.501,  deathType: 'alive',  headshotKills: 1,  heals: 1,  killPlace: 16,  killPoints: 1077,  killPointsDelta: 33.6085434,  killStreaks: 0,  kills: 2,  astKillPoints: 0,  lastWinPoints: 0,  longestKill: 19,  mostDamage: 0,  name: 'martinsileno',  playerId: 'account.a540a32a49784025939a975b45e86bfe',  revives: 0,  rideDistance: 0,  roadKills: 0,  teamKills: 0,  timeSurvived: 892,  vehicleDestroys: 0,  walkDistance: 3915.62,  weaponsAcquired: 0,  winPlace: 1,  winPoints: 1114,  winPointsDelta: 78.83802 }
```

## License

MIT
