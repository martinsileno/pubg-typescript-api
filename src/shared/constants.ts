export enum DeathType {
  ALIVE = 'alive',
  BY_PLAYER = 'byplayer',
  SUICIDE = 'suicide',
}

export enum GameMode {
  DUO = 'duo',
  DUO_FPP = 'duo-fpp',
  SOLO = 'solo',
  SOLO_FPP = 'solo-fpp',
  SQUAD = 'squad',
  SQUAD_FPP = 'squad-fpp',
}

export enum MapName {
  DESERT_MAIN = 'Desert_Main',
  ERANGEL_MAIN = 'Erangel_Main',
}

export enum PlatformRegion {
  XBOX_AS = 'xbox-as',
  XBOX_EU = 'xbox-eu',
  XBOX_NA = 'xbox-na',
  XBOX_OC = 'xbox-oc',
  PC_KRJP = 'pc-krjp',
  PC_JP = 'pc-jp',
  PC_NA = 'pc-na',
  PC_EU = 'pc-eu',
  PC_OC = 'pc-oc',
  PC_KAKAO = 'pc-kakao',
  PC_SEA = 'pc-sea',
  PC_SA = 'pc-sa',
  PC_AS = 'pc-as',
}

export enum TelemetryEventType {
  LOGPLAYERLOGIN = 'LogPlayerLogin',
  LOGPLAYERCREATE = 'LogPlayerCreate',
  LOGPLAYERPOSITION = 'LogPlayerPosition',
  LOGPLAYERATTACK = 'LogPlayerAttack',
  LOGITEMPICKUP = 'LogItemPickup',
  LOGITEMEQUIP = 'LogItemEquip',
  LOGITEMUNEQUIP = 'LogItemUnequip',
  LOGVEHICLERIDE = 'LogVehicleRide',
  LOGMATCHDEFINITION = 'LogMatchDefinition',
  LOGMATCHSTART = 'LogMatchStart',
  LOGGAMESTATEPERIODIC = 'LogGameStatePeriodic',
  LOGVEHICLELEAVE = 'LogVehicleLeave',
  LOGPLAYERTAKEDAMAGE = 'LogPlayerTakeDamage',
  LOGPLAYERLOGOUT = 'LogPlayerLogout',
  LOGITEMATTACH = 'LogItemAttach',
  LOGITEMDROP = 'LogItemDrop',
  LOGPLAYERKILL = 'LogPlayerKill',
  LOGITEMDETACH = 'LogItemDetach',
  LOGITEMUSE = 'LogItemUse',
  LOGCAREPACKAGESPAWN = 'LogCarePackageSpawn',
  LOGVEHICLEDESTROY = 'LogVehicleDestroy',
  LOGCAREPACKAGELAND = 'LogCarePackageLand',
  LOGMATCHEND = 'LogMatchEnd',
  LOGSWIMSTART = 'LogSwimStart',
  LOGSWIMEND = 'LogSwimEnd',
  LOGARMORDESTROY = 'LogArmorDestroy',
  LOGWHEELDESTROY = 'LogWheelDestroy',
  LOGPLAYERMAKEGROGGY = 'LogPlayerMakeGroggy',
  LOGPLAYERREVIVE = 'LogPlayerRevive',
}
