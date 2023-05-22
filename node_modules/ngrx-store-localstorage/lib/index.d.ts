export declare const dateReviver: (_key: string, value: any) => any;
export declare const rehydrateApplicationState: (keys: Keys, storage: Storage, storageKeySerializer: (key: string) => string, restoreDates: boolean) => any;
export declare const syncStateUpdate: (state: any, keys: Keys, storage: Storage, storageKeySerializer: (key: string | number) => string, removeOnUndefined: boolean, syncCondition?: (state: any) => any) => void;
export declare const defaultMergeReducer: (state: any, rehydratedState: any, action: any) => any;
export declare const localStorageSync: (config: LocalStorageConfig) => (reducer: any) => (state: any, action: any) => any;
export interface LocalStorageConfig {
    keys: Keys;
    rehydrate?: boolean;
    storage?: Storage;
    removeOnUndefined?: boolean;
    restoreDates?: boolean;
    storageKeySerializer?: (key: string) => string;
    syncCondition?: (state: any) => any;
    checkStorageAvailability?: boolean;
    mergeReducer?: (state: any, rehydratedState: any, action: any) => any;
}
interface KeyConfiguration {
    [key: string]: string[] | number[] | KeyConfiguration[] | Options | ((key: string, value: any) => any);
}
interface Options {
    serialize?: (state: any) => any;
    deserialize?: (state: any) => any;
    reviver?: (key: string, value: any) => any;
    replacer?: ((key: string, value: any) => any) | string[];
    encrypt?: (message: string) => string;
    decrypt?: (message: string) => string;
    filter?: string[];
    space?: string | number;
}
export declare type Keys = (KeyConfiguration | Options | string)[];
export {};
