import { ITelemetry, TelemetryEventType } from '../..';

import {
  ArmorDestroy,
  CarePackageLand,
  CarePackageSpawn,
  GameStatePeriodic,
  ItemAttach,
  ItemDetach,
  ItemDrop,
  ItemEquip,
  ItemPickup,
  ItemUnequip,
  ItemUse,
  MatchDefinition,
  MatchEnd,
  MatchStart,
  PlayerAttack,
  PlayerCreate,
  PlayerKill,
  PlayerLogin,
  PlayerLogout,
  PlayerMakeGroggy,
  PlayerPosition,
  PlayerRevive,
  PlayerTakeDamage,
  SwimEnd,
  SwimStart,
  VehicleDestroy,
  VehicleLeave,
  VehicleRide,
  WheelDestroy,
} from './events';


export class Telemetry {
  private _armorDestroyEvents: ArmorDestroy[] = [];
  private _carePackageLandEvents: CarePackageLand[] = [];
  private _carePackageSpawnEvents: CarePackageSpawn[] = [];
  private _gameStatePeriodicEvents: GameStatePeriodic[] = [];
  private _itemAttachEvents: ItemAttach[] = [];
  private _itemDetachEvents: ItemDetach[] = [];
  private _itemDropEvents: ItemDrop[] = [];
  private _itemEquipEvents: ItemEquip[] = [];
  private _itemPickupEvents: ItemPickup[] = [];
  private _itemUnequipEvents: ItemUnequip[] = [];
  private _itemUseEvents: ItemUse[] = [];
  private _matchDefinitionEvents: MatchDefinition[] = [];
  private _matchEndEvents: MatchEnd[] = [];
  private _matchStartEvents: MatchStart[] = [];
  private _playerAttackEvents: PlayerAttack[] = [];
  private _playerCreateEvents: PlayerCreate[] = [];
  private _playerKillEvents: PlayerKill[] = [];
  private _playerLoginEvents: PlayerLogin[] = [];
  private _playerLogoutEvents: PlayerLogout[] = [];
  private _playerMakeGroggyEvents: PlayerMakeGroggy[] = [];
  private _playerPositionEvents: PlayerPosition[] = [];
  private _playerReviveEvents: PlayerRevive[] = [];
  private _playerTakeDamageEvents: PlayerTakeDamage[] = [];
  private _swimEndEvents: SwimEnd[] = [];
  private _swimStartEvents: SwimStart[] = [];
  private _vehicleDestroyEvents: VehicleDestroy[] = [];
  private _vehicleLeaveEvents: VehicleLeave[] = [];
  private _vehicleRideEvents: VehicleRide[] = [];
  private _wheelDestroyEvents: WheelDestroy[] = [];

  constructor(telemetryData: ITelemetry) {
    telemetryData.forEach(elem => {
      switch (elem._T) {
        // switch on discriminant = elem type automatically "cast" as correct type
        case TelemetryEventType.LOGARMORDESTROY:
          this._armorDestroyEvents.push(new ArmorDestroy(elem));
          break;
        case TelemetryEventType.LOGCAREPACKAGELAND:
          this._carePackageLandEvents.push(new CarePackageLand(elem));
          break;
        case TelemetryEventType.LOGCAREPACKAGESPAWN:
          this._carePackageSpawnEvents.push(new CarePackageSpawn(elem));
          break;
        case TelemetryEventType.LOGGAMESTATEPERIODIC:
          this._gameStatePeriodicEvents.push(new GameStatePeriodic(elem));
          break;
        case TelemetryEventType.LOGITEMATTACH:
          this._itemAttachEvents.push(new ItemAttach(elem));
          break;
        case TelemetryEventType.LOGITEMDETACH:
          this._itemDetachEvents.push(new ItemDetach(elem));
          break;
        case TelemetryEventType.LOGITEMDROP:
          this._itemDropEvents.push(new ItemDrop(elem));
          break;
        case TelemetryEventType.LOGITEMEQUIP:
          this._itemEquipEvents.push(new ItemEquip(elem));
          break;
        case TelemetryEventType.LOGITEMPICKUP:
          this._itemPickupEvents.push(new ItemPickup(elem));
          break;
        case TelemetryEventType.LOGITEMUNEQUIP:
          this._itemUnequipEvents.push(new ItemUnequip(elem));
          break;
        case TelemetryEventType.LOGITEMUSE:
          this._itemUseEvents.push(new ItemUse(elem));
          break;
        case TelemetryEventType.LOGMATCHDEFINITION:
          this._matchDefinitionEvents.push(new MatchDefinition(elem));
          break;
        case TelemetryEventType.LOGMATCHEND:
          this._matchEndEvents.push(new MatchEnd(elem));
          break;
        case TelemetryEventType.LOGMATCHSTART:
          this._matchStartEvents.push(new MatchStart(elem));
          break;
        case TelemetryEventType.LOGPLAYERATTACK:
          this._playerAttackEvents.push(new PlayerAttack(elem));
          break;
        case TelemetryEventType.LOGPLAYERCREATE:
          this._playerCreateEvents.push(new PlayerCreate(elem));
          break;
        case TelemetryEventType.LOGPLAYERKILL:
          this._playerKillEvents.push(new PlayerKill(elem));
          break;
        case TelemetryEventType.LOGPLAYERLOGIN:
          this._playerLoginEvents.push(new PlayerLogin(elem));
          break;
        case TelemetryEventType.LOGPLAYERLOGOUT:
          this._playerLogoutEvents.push(new PlayerLogout(elem));
          break;
        case TelemetryEventType.LOGPLAYERMAKEGROGGY:
          this._playerMakeGroggyEvents.push(new PlayerMakeGroggy(elem));
          break;
        case TelemetryEventType.LOGPLAYERPOSITION:
          this._playerPositionEvents.push(new PlayerPosition(elem));
          break;
        case TelemetryEventType.LOGPLAYERREVIVE:
          this._playerReviveEvents.push(new PlayerRevive(elem));
          break;
        case TelemetryEventType.LOGPLAYERTAKEDAMAGE:
          this._playerTakeDamageEvents.push(new PlayerTakeDamage(elem));
          break;
        case TelemetryEventType.LOGSWIMSTART:
          this._swimStartEvents.push(new SwimStart(elem));
          break;
        case TelemetryEventType.LOGSWIMEND:
          this._swimEndEvents.push(new SwimEnd(elem));
          break;
        case TelemetryEventType.LOGVEHICLEDESTROY:
          this._vehicleDestroyEvents.push(new VehicleDestroy(elem));
          break;
        case TelemetryEventType.LOGVEHICLELEAVE:
          this._vehicleLeaveEvents.push(new VehicleLeave(elem));
          break;
        case TelemetryEventType.LOGVEHICLERIDE:
          this._vehicleRideEvents.push(new VehicleRide(elem));
          break;
        case TelemetryEventType.LOGWHEELDESTROY:
          this._wheelDestroyEvents.push(new WheelDestroy(elem));
          break;
      }
    });
  }

  //#region GETTERS

  get armorDestroyEvents() {
    return this._armorDestroyEvents;
  }

  get carePackageLandEvents() {
    return this._carePackageLandEvents;
  }

  get carePackageSpawnEvents() {
    return this._carePackageSpawnEvents;
  }

  get gameStatePeriodicEvents() {
    return this._gameStatePeriodicEvents;
  }

  get itemAttachEvents() {
    return this._itemAttachEvents;
  }

  get itemDetachEvents() {
    return this._itemDetachEvents;
  }

  get itemDropEvents() {
    return this._itemDropEvents;
  }

  get itemEquipEvents() {
    return this._itemEquipEvents;
  }

  get itemPickupEvents() {
    return this._itemPickupEvents;
  }

  get itemUnequipEvents() {
    return this._itemUnequipEvents;
  }

  get itemUseEvents() {
    return this._itemUseEvents;
  }

  get matchDefinitionEvents() {
    return this._matchDefinitionEvents;
  }

  get matchEndEvents() {
    return this._matchEndEvents;
  }

  get matchStartEvents() {
    return this._matchStartEvents;
  }

  get playerAttackEvents() {
    return this._playerAttackEvents;
  }

  get playerCreateEvents() {
    return this._playerCreateEvents;
  }

  get playerKillEvents() {
    return this._playerKillEvents;
  }

  get playerLoginEvents() {
    return this._playerLoginEvents;
  }

  get playerLogoutEvents() {
    return this._playerLogoutEvents;
  }

  get playerMakeGroggyEvents() {
    return this._playerMakeGroggyEvents;
  }

  get playerPositionEvents() {
    return this._playerPositionEvents;
  }

  get playerReviveEvents() {
    return this._playerReviveEvents;
  }

  get playerTakeDamageEvents() {
    return this._playerTakeDamageEvents;
  }

  get swimStartEvents() {
    return this._swimStartEvents;
  }

  get swimEndEvents() {
    return this._swimEndEvents;
  }

  get vehicleDestroyEvents() {
    return this._vehicleDestroyEvents;
  }

  get vehicleLeaveEvents() {
    return this._vehicleLeaveEvents;
  }

  get vehicleRideEvents() {
    return this._vehicleRideEvents;
  }

  get wheelDestroyEvents() {
    return this._wheelDestroyEvents;
  }

  //#endregion

}
