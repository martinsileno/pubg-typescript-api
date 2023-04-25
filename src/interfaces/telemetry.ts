// objects

export interface IItem {
  itemId: string;
  stackCount: number;
  category: string;
  subCategory: string;
  attachedItems: string[];
}

/**
 * The range for X and Y axes is 0 - 816,000 for 8km maps.
 * Location values are measured in centimeters.
 */
export interface ILocation {
  x: number;
  y: number;
  z: number;
}

export interface IItemPackage {
  itemPackageId: string;
  location: ILocation;
  items: IItem[];
}

export interface ICharacter {
  name: string;
  teamId: number;
  health: number;
  location: ILocation;
  ranking: number;
  accountId: string;
}

export interface IGameResult {
  rank: number;
  gameResult: string;
  teamId: number;
  stats: IStats;
  accountId: string;
}

export interface IStats {
  killCount: number;
  distanceOnFoot: number;
  distanceOnSwim: number;
  distanceOnVehicle: number;
  distanceOnParachute: number;
  distanceOnFreefall: number;
}

export interface IDamageInfo {
  damageReason: string;
  damageTypeCategory: string;
  damageCauserName: string;
  additionalInfo: string[];
  distance: number;
  isThroughPenetrableWall: boolean;
}

export interface IVehicle {
  vehicleType: string;
  vehicleId: string;
  healthPercent: number;
  feulPercent: number; // XXX: typo included!
}

export interface IGameState {
  elapsedTime: number;
  numAliveTeams: number;
  numJoinPlayers: number;
  numStartPlayers: number;
  numAlivePlayers: number;
  safetyZonePosition: ILocation;
  safetyZoneRadius: number;
  poisonGasWarningPosition: ILocation;
  poisonGasWarningRadius: number;
  redZonePosition: ILocation;
  redZoneRadius: number;
}

// events

// XXX: ICommon exists in PC only!
export interface ICommon {
  isGame: number;
}

export interface IBaseTelemetryEvent {
  _D: string; // date string
  _T: string; // discriminant of the Union type
}

export interface ITelemetryEvent extends IBaseTelemetryEvent {
  common: ICommon;
}

export interface ILogPlayerLogin extends ITelemetryEvent {
  _T: "LogPlayerLogin";
  accountId: string;
}

export interface ILogPlayerCreate extends ITelemetryEvent {
  _T: "LogPlayerCreate";
  character: ICharacter;
}

export interface ILogPlayerPosition extends ITelemetryEvent {
  _T: "LogPlayerPosition";
  character: ICharacter;
  elapsedTime: number;
  numAlivePlayers: number;
  vehicle: IVehicle;
}

export interface ILogPlayerAttack extends ITelemetryEvent {
  _T: "LogPlayerAttack";
  attackId: number;
  attacker: ICharacter;
  attackType: string;
  fireWeaponStackCount: number;
  weapon: IItem;
  vehicle?: IVehicle;
}

export interface ILogItemPickup extends ITelemetryEvent {
  _T: "LogItemPickup";
  character: ICharacter;
  item: IItem;
}

export interface ILogItemEquip extends ITelemetryEvent {
  _T: "LogItemEquip";
  character: ICharacter;
  item: IItem;
}

export interface ILogItemUnequip extends ITelemetryEvent {
  _T: "LogItemUnequip";
  character: ICharacter;
  item: IItem;
}

export interface ILogVehicleRide extends ITelemetryEvent {
  _T: "LogVehicleRide";
  character: ICharacter;
  vehicle: IVehicle;
  seatIndex: number;
}

export interface ILogMatchDefinition extends IBaseTelemetryEvent {
  _T: "LogMatchDefinition";
  MatchId: string;
  PingQuality: string; // PC only
  SeasonState: string;
}

export interface ILogMatchStart extends ITelemetryEvent {
  _T: "LogMatchStart";
  // some of these fields are not documented but are found in response...
  mapName: string;
  weatherId: string;
  characters: ICharacter[];
  cameraViewBehaviour: string;
  teamSize: number;
  isCustomGame: boolean;
  isEventMode: boolean;
  blueZoneCustomOptions: string;
}

export interface ILogGameStatePeriodic extends ITelemetryEvent {
  _T: "LogGameStatePeriodic";
  gameState: IGameState;
}

export interface ILogVehicleLeave extends ITelemetryEvent {
  _T: "LogVehicleLeave";
  character: ICharacter;
  vehicle: IVehicle;
  rideDistance: number; // PC only
  seatIndex: number; // PC only
}

export interface ILogPlayerTakeDamage extends ITelemetryEvent {
  _T: "LogPlayerTakeDamage";
  attackId: number;
  attacker?: ICharacter;
  victim: ICharacter;
  damageTypeCategory: string;
  damageReason: string;
  damage: number;
  damageCauserName: string;
}

export interface ILogPlayerLogout extends ITelemetryEvent {
  _T: "LogPlayerLogout";
  accountId: string;
}

export interface ILogItemAttach extends ITelemetryEvent {
  _T: "LogItemAttach";
  character: ICharacter;
  parentItem: IItem;
  childItem: IItem;
}

export interface ILogItemDrop extends ITelemetryEvent {
  _T: "LogItemDrop";
  character: ICharacter;
  item: IItem;
}

export interface ILogPlayerKill extends ITelemetryEvent {
  _T: "LogPlayerKill";
  attackId: number;
  killer: ICharacter;
  victim: ICharacter;
  damageReason: string;
  damageTypeCategory: string;
  damageCauserName: string;
  distance: number;
}

export interface ILogItemDetach extends ITelemetryEvent {
  _T: "LogItemDetach";
  character: ICharacter;
  parentItem: IItem;
  childItem: IItem;
}

export interface ILogItemUse extends ITelemetryEvent {
  _T: "LogItemUse";
  character: ICharacter;
  item: IItem;
}

export interface ILogCarePackageSpawn extends ITelemetryEvent {
  _T: "LogCarePackageSpawn";
  itemPackage: IItemPackage;
}

export interface ILogVehicleDestroy extends ITelemetryEvent {
  _T: "LogVehicleDestroy";
  attackId: number;
  attacker: ICharacter;
  vehicle: IVehicle;
  damageTypeCategory: string;
  damageCauserName: string;
  distance: number;
}

export interface ILogCarePackageLand extends ITelemetryEvent {
  _T: "LogCarePackageLand";
  itemPackage: IItemPackage;
}

export interface ILogMatchEnd extends ITelemetryEvent {
  _T: "LogMatchEnd";
  characters: ICharacter[];
}

export interface ILogSwimStart extends ITelemetryEvent {
  _T: "LogSwimStart";
  character: ICharacter;
}

export interface ILogSwimEnd extends ITelemetryEvent {
  _T: "LogSwimEnd";
  character: ICharacter;
  swimDistance: number;
}

export interface ILogArmorDestroy extends ITelemetryEvent {
  _T: "LogArmorDestroy";
  attackId: number;
  attacker: ICharacter;
  victim: ICharacter;
  damageTypeCategory: string;
  damageReason: string;
  damageCauserName: string;
  item: IItem;
  distance: number;
}

export interface ILogWheelDestroy extends ITelemetryEvent {
  _T: "LogWheelDestroy";
  attackId: number;
  attacker: ICharacter;
  vehicle: IVehicle;
  damageTypeCategory: string;
  damageCauserName: string;
}

export interface ILogPlayerMakeGroggy extends ITelemetryEvent {
  _T: "LogPlayerMakeGroggy";
  attackId: number;
  attacker: ICharacter;
  victim: ICharacter;
  damageReason: string; // undocumented?
  damageTypeCategory: string;
  damageCauserName: string;
  distance: number;
  isAttackerInVehicle: boolean;
  dBNOId: number;
}

export interface ILogPlayerRevive extends ITelemetryEvent {
  _T: "LogPlayerRevive";
  reviver: ICharacter;
  victim: ICharacter;
}

export interface ILogBlackZoneEnded extends ITelemetryEvent {
  _T: "LogBlackZoneEnded";
  survivors: ICharacter[];
}

export interface ILogCharacterCarry extends ITelemetryEvent {
  _T: "LogCharacterCarry";
  character: ICharacter;
  carryState: string;
}

export interface ILogEmPickupLiftOff extends ITelemetryEvent {
  _T: "LogEmPickupLiftOff";
  instigator: ICharacter;
  riders: ICharacter[];
}

export interface ILogItemPickupFromCarePackage extends ITelemetryEvent {
  _T: "LogItemPickupFromCarePackage";
  character: ICharacter;
  item: IItem;
  carePackageUniqueId: number;
}

export interface ILogItemPickupFromCustomCarePackage extends ITelemetryEvent {
  _T: "LogItemPickupFromCarePackage";
  character: ICharacter;
  item: IItem;
}

export interface ILogItemPickupFromVehicleTrunk extends ITelemetryEvent {
  _T: "LogItemPickupFromVehicleTrunk";
  character: ICharacter;
  vehicle: IVehicle;
  item: IItem;
}

export interface ILogItemPutToVehicleTrunk extends ITelemetryEvent {
  _T: "LogItemPutToVehicleTrunk";
  character: ICharacter;
  vehicle: IVehicle;
  item: IItem;
}

export interface ILogObjectDestroy extends ITelemetryEvent {
  _T: "LogObjectDestroy";
  character: ICharacter;
  objectType: string;
  objectLocation: ILocation;
}

export interface ILogObjectInteraction extends ITelemetryEvent {
  _T: "LogObjectInteraction";
  character: ICharacter;
  objectType: string;
  objectTypeStatus: string;
  objectTypeAdditionalInfo: string;
}

export interface ILogParachuteLanding extends ITelemetryEvent {
  _T: "LogParachuteLanding";
  character: ICharacter;
  distance: number;
}

export interface ILogPhaseChange extends ITelemetryEvent {
  _T: "LogPhaseChange";
  phase: number;
  elapsedTime: number;
}

export interface ILogPlayerDestroyBreachableWall extends ITelemetryEvent {
  _T: "LogPlayerDestroyBreachableWall";
  attacker: ICharacter;
  weapon: IItem;
}

export interface ILogPlayerDestroyProp extends ITelemetryEvent {
  _T: "LogPlayerDestroyProp";
  attacker: ICharacter;
  objectType: string;
  objectLocation: ILocation;
}

export interface ILogPlayerKillV2 extends ITelemetryEvent {
  _T: "LogPlayerKillV2";
  attackId: number;
  dBNOId: number;
  victimGameResult: IGameResult;
  victim: ICharacter;
  victimWeapon: string;
  victimWeaponAdditionalInfo: string[];
  dBNOMaker: ICharacter;
  dBNODamageInfo: IDamageInfo;
  finisher: ICharacter;
  finisherDamageInfo: IDamageInfo;
  killer: ICharacter;
  killerDamageInfo: IDamageInfo;
  assists_AccountId: string[];
  teamKillers_Accountid: string[];
  isSuicide: boolean;
}

export interface ILogPlayerRedeploy extends ITelemetryEvent {
  _T: "LogPlayerRedeploy";
  character: ICharacter;
}

export interface ILogPlayerRedeployStart extends ITelemetryEvent {
  _T: "LogPlayerRedeployStart";
  characters: ICharacter[];
}

export interface ILogPlayerUseThrowable extends ITelemetryEvent {
  _T: "LogPlayerUseThrowable";
  attackId: number;
  fireWeaponStackCount: number;
  attacker: ICharacter;
  attackType: string;
  weapon: IItem;
}

export interface ILogRedZoneEnded extends ITelemetryEvent {
  _T: "LogRedZoneEnded";
  drivers: ICharacter[];
}

export interface ILogVaultStart extends ITelemetryEvent {
  _T: "LogVaultStart";
  character: ICharacter;
  isLedgeGrab: boolean;
}

export interface ILogVehicleDamage extends ITelemetryEvent {
  _T: "LogVehicleDamage";
  attackId: number;
  attacker: ICharacter;
  vehicle: IVehicle;
  damageTypeCategory: string;
  damageCauserName: string;
  damage: number;
  distance: number;
}

export interface ILogWeaponFireCount extends ITelemetryEvent {
  _T: "LogWeaponFireCount";
  character: ICharacter;
  weaponId: string;
  fireCount: number; // Increments of 10
}

export type ITelemetryElement =
  | ILogPlayerLogin
  | ILogPlayerCreate
  | ILogPlayerPosition
  | ILogPlayerAttack
  | ILogItemPickup
  | ILogItemEquip
  | ILogItemUnequip
  | ILogVehicleRide
  | ILogMatchDefinition
  | ILogMatchStart
  | ILogGameStatePeriodic
  | ILogVehicleLeave
  | ILogPlayerTakeDamage
  | ILogPlayerLogout
  | ILogItemAttach
  | ILogItemDrop
  | ILogPlayerKill
  | ILogItemDetach
  | ILogItemUse
  | ILogCarePackageSpawn
  | ILogVehicleDestroy
  | ILogCarePackageLand
  | ILogMatchEnd
  | ILogSwimStart
  | ILogSwimEnd
  | ILogArmorDestroy
  | ILogWheelDestroy
  | ILogPlayerMakeGroggy
  | ILogPlayerRevive
  | ILogBlackZoneEnded
  | ILogCharacterCarry
  | ILogEmPickupLiftOff
  | ILogItemPickupFromCarePackage
  | ILogItemPickupFromCustomCarePackage
  | ILogItemPickupFromVehicleTrunk
  | ILogItemPutToVehicleTrunk
  | ILogObjectDestroy
  | ILogObjectInteraction
  | ILogPhaseChange
  | ILogPlayerDestroyBreachableWall
  | ILogPlayerDestroyProp
  | ILogPlayerKillV2
  | ILogPlayerRedeploy
  | ILogPlayerRedeployStart
  | ILogRedZoneEnded
  | ILogVaultStart
  | ILogVehicleDamage
  | ILogWeaponFireCount;

export type ITelemetry = ITelemetryElement[];
