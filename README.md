
# PUBG TypeScript API

[![Join the chat at https://gitter.im/pubg-typescript-api/Lobby](https://badges.gitter.im/pubg-typescript-api/Lobby.svg)](https://gitter.im/pubg-typescript-api/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![npm version](https://badge.fury.io/js/pubg-typescript-api.svg)](https://www.npmjs.com/package/pubg-typescript-api)


## Table of contents
  * [About](#about)
  * [Getting started](#getting-started)
  * [Usage example: player last match](#usage-example-player-last-match)
  * [Usage example: player aggregate stats](#usage-example-player-aggregate-stats)
  * [Usage example: telemetry](#usage-example-telemetry)
      * [Download telemetry data](#download-telemetry-data)
      * [List of kills in a match](#list-of-kills-in-a-match)
      * [Care package landings](#care-package-landings)
      * [Player positions in a match](#player-positions-in-a-match)
  * [License](#license)


## About
Unofficial TypeScript wrapper on the official PUBG API.

**Main features**:

- Simple to use
- Maps API resources to *easier-to-use* "Models" (i.e. `Player`, `Match`, `Participant`, etc.)
- Telemetry parsing
- OOP design
- Fully typed
- ~~Helps you win chicken dinners~~

## Getting started

First, obtain an API key from [PUBG Official API](https://developer.playbattlegrounds.com/).

Then install the package with NPM:
```
npm install --save pubg-typescript-api
```

## Usage example: player last match

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

## Usage example: player aggregate stats

Since May 1st and version 1.3 of this wrapper we finally have aggregate data on a player for each season.

Getting this data is very easy,

```typescript
const api = new PubgAPI(API_KEY, PlatformRegion.PC_NA);
const result = await Player.filterByName(api, ['shroud']);
const shroud = result[0];
const seasonData = await PlayerSeason.get(api, shroud.id, 'division.bro.official.2018-04');
const soloStats = seasonData.squadFPPStats;
console.log(`Player [${shroud.name}] stats for season [${seasonData.seasonId}]:`);
console.log(`Kills ${soloStats.kills} / Assists ${soloStats.assists} / Knock-outs ${soloStats.dBNOs}`);
console.log(`Played ${soloStats.roundsPlayed} matches`);
console.log(`Won ${soloStats.wins} (${(100 * soloStats.wins / soloStats.roundsPlayed).toFixed(2)}%)`);
console.log(`top10s ${soloStats.top10s} (${(100 * soloStats.top10s / soloStats.roundsPlayed).toFixed(2)}%)`);
```

This results in

```
Player [shroud] stats for season [division.bro.official.2018-04]:
Kills 268 / Assists 50 / Knock-outs 200
Played 50 matches
Won 13 (26.00%)
top10s 20 (40.00%)
```

## Usage example: telemetry

This package includes an easy-to-use and complete telemetry parsing utility.

As an usage example we will get a list of player kills, care package landings and a list of player positions for a player.

You can do **much** more with telemetry data, please read the documentation in the wiki for more details.

### Download telemetry data

The first thing to do when working with telemetry is to download the corresponding object

```typescript
const api = new PubgAPI(API_KEY, PlatformRegion.PC_EU);
const telemetry = await match.getTelemetry(api);
```

### List of kills in a match

```typescript
telemetry.playerKillEvents.forEach(e => {
    console.log(`[${e.dateTime.toLocaleDateString()} ${e.dateTime.toLocaleTimeString()} kill] ${e.killer.name} -> ${e.victim.name} | ${e.damageCauserName} ${e.damageTypeCategory} @ ${e.distance / 100}m`);
});
```

example output:

```
...
[2018-4-28 19:16:28 kill] Ludosh -> martinsileno | PlayerMale_A_C Damage_Groggy @ 63.1690576171875m
[2018-4-28 19:16:28 kill] siperdekizurafa -> zaku6652 | PlayerMale_A_C Damage_Groggy @ 36.4665966796875m
[2018-4-28 19:16:28 kill] Ludosh -> Novanta | WeapHK416_C Damage_Gun @ 54.971845703125m
[2018-4-28 19:17:54 kill] Razzmatazzzzz -> WilliamTanz | WeapSCAR-L_C Damage_Gun @ 143.47111328125m
[2018-4-28 19:17:55 kill] Haspex -> LMNTRIXs | WeapAK47_C Damage_Gun @ 126.266767578125m
...
```

*"damage groggy" means bleed out damage*

### Care package landings

```typescript
telemetry.carePackageLandEvents.forEach(e => {
  const itemsString = e.itemPackage.items.map(item => item.itemId).join(', ');
  console.log(`[${e.dateTime.toLocaleDateString()} ${e.dateTime.toLocaleTimeString()} carePackage land] with ${itemsString}`);
});
```

example output:

```
[2018-4-28 19:04:55 carePackage land] with Item_Weapon_M24_C, Item_Ammo_762mm_C, Item_Ammo_762mm_C, Item_Attach_Weapon_Upper_CQBSS_C, Item_Attach_Weapon_Upper_PM2_01_C, Item_Back_C_01_Lv3_C, Item_Heal_MedKit_C
[2018-4-28 19:11:27 carePackage land] with Item_Weapon_M24_C, Item_Ammo_762mm_C, Item_Ammo_762mm_C, Item_Attach_Weapon_Upper_CQBSS_C, Item_Head_G_01_Lv3_C, Item_Heal_FirstAid_C
[2018-4-28 19:15:11 carePackage land] with Item_Weapon_Groza_C, Item_Ammo_762mm_C, Item_Ammo_762mm_C, Item_Ammo_762mm_C, Item_Attach_Weapon_Upper_CQBSS_C, Item_Armor_C_01_Lv3_C, Item_Heal_MedKit_C
[2018-4-28 19:24:19 carePackage land] with Item_Weapon_M249_C, Item_Ammo_556mm_C, Item_Ammo_556mm_C, Item_Head_G_01_Lv3_C, Item_Heal_MedKit_C, Item_Ghillie_02_C
```

### Player positions in a match

```typescript
const martinPositions = telemetry.playerPositionEvents.filter(e => e.character.name === 'martinsileno');
martinPositions.forEach(e => {
  const loc = e.character.location;
  console.log(`[${e.dateTime.toLocaleDateString()} ${e.dateTime.toLocaleTimeString()} position] (${loc.x}, ${loc.y}, ${loc.z})`);
});
```

example output:

```
...
[2018-4-28 19:12:44 position] (432451, 63057.02734375, 5437.40966796875)
[2018-4-28 19:12:54 position] (429667.1875, 61954.94921875, 4977.5)
[2018-4-28 19:13:04 position] (425153.90625, 65993.546875, 4900.1298828125)
[2018-4-28 19:13:14 position] (422108.46875, 71026.3671875, 5496.9599609375)
[2018-4-28 19:13:24 position] (419111.8125, 75035.40625, 5401.53759765625)
...
```

## License

MIT
