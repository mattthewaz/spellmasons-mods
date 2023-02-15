import type * as particles from '@pixi/particle-emitter';
import { Spell } from '../cards';
import { IPickup } from '../entity/Pickup';
import { UnitSource } from '../entity/units';
export declare enum UnitType {
    PLAYER_CONTROLLED = 0,
    AI = 1
}
export declare enum UnitSubType {
    MELEE = 0,
    RANGED_LOS = 1,
    RANGED_RADIUS = 2,
    SUPPORT_CLASS = 3
}
export declare enum Faction {
    ALLY = 0,
    ENEMY = 1
}
export declare enum CardCategory {
    Damage = 0,
    Movement = 1,
    Targeting = 2,
    Mana = 3,
    Curses = 4,
    Blessings = 5,
    Soul = 6
}
export declare enum CardRarity {
    COMMON = "COMMON",
    SPECIAL = "SPECIAL",
    UNCOMMON = "UNCOMMON",
    RARE = "RARE",
    FORBIDDEN = "FORBIDDEN"
}
export declare const probabilityMap: Record<CardRarity, number>;
export declare type JEmitter = particles.Emitter & {
    cleanAfterTurn?: boolean;
};
export interface Mod {
    modName: string;
    author: string;
    description: string;
    screenshot: string;
    sfx?: {
        [key: string]: string[];
    };
    spritesheet?: string;
    units?: UnitSource[];
    pickups?: IPickup[];
    spells?: Spell[];
}