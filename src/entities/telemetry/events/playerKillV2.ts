import { ILogPlayerKillV2 } from "../../..";

import { Character } from "../objects/character";
import { GameResult } from "../objects/gameResult";
import { DamageInfo } from "../objects/damageInfo";

import { TelemetryEvent } from "./telemetryEvent";

export class PlayerKillV2 extends TelemetryEvent {
  private _attackId: number;
  private _dBNOId: number;
  private _victimGameResult: GameResult;
  private _victim: Character;
  private _victimWeapon: string;
  private _victimWeaponAdditionalInfo: string[];
  private _dBNOMaker: Character;
  private _dBNODamageInfo: DamageInfo;
  private _finisher: Character;
  private _finisherDamageInfo: DamageInfo;
  private _killer: Character;
  private _killerDamageInfo: DamageInfo;
  private _assists_AccountId: string[];
  private _teamKillers_Accountid: string[];
  private _isSuicide: boolean;

  constructor(event: ILogPlayerKillV2) {
    super(event);
    this._attackId = event.attackId;
    this._dBNOId = event.dBNOId;
    this._victimGameResult = new GameResult(event.victimGameResult);
    this._victim = new Character(event.victim);
    this._victimWeapon = event.victimWeapon;
    this._victimWeaponAdditionalInfo = event.victimWeaponAdditionalInfo;
    this._dBNOMaker = new Character(event.dBNOMaker);
    this._dBNODamageInfo = new DamageInfo(event.dBNODamageInfo);
    this._finisher = new Character(event.finisher);
    this._finisherDamageInfo = new DamageInfo(event.finisherDamageInfo);
    this._killer = new Character(event.killer);
    this._killerDamageInfo = new DamageInfo(event.killerDamageInfo);
    this._assists_AccountId = event.assists_AccountId;
    this._teamKillers_Accountid = event.teamKillers_Accountid;
    this._isSuicide = event.isSuicide;
  }

  get attackId(): number {
    return this._attackId;
  }

  get dBNOId(): number {
    return this._dBNOId;
  }

  get victimGameResult(): GameResult {
    return this._victimGameResult;
  }

  get victim(): Character {
    return this._victim;
  }

  get victimWeapon(): string {
    return this._victimWeapon;
  }

  get victimWeaponAdditionalInfo(): string[] {
    return this._victimWeaponAdditionalInfo;
  }

  get dBNOMaker(): Character {
    return this._dBNOMaker;
  }

  get dBNODamageInfo(): DamageInfo {
    return this._dBNODamageInfo;
  }

  get finisher(): Character {
    return this._finisher;
  }

  get finisherDamageInfo(): DamageInfo {
    return this._finisherDamageInfo;
  }

  get killer(): Character {
    return this._killer;
  }

  get killerDamageInfo(): DamageInfo {
    return this._killerDamageInfo;
  }

  get assists_AccountId(): string[] {
    return this._assists_AccountId;
  }

  get teamKillers_AccountId(): string[] {
    return this._teamKillers_Accountid;
  }

  get isSuicide(): boolean {
    return this._isSuicide;
  }
}
