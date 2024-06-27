declare module 'inotify';

type BASE_TYPE_IN = number;
export type BitMask = BASE_TYPE_IN;

type handlerPtr = Symbol;

export interface ICallbackEvent {
    mask: BitMask;
    name: string;
    watch: handlerPtr;
    cookie: number;
}

export interface IInotifyWatchConfig {
    watch_for: BASE_TYPE_IN;
    path: string;
    callback: (event: ICallbackEvent) => void;
}

export class Inotify {
    public constructor(persistent: boolean);

    public addWatch(arg0: IInotifyWatchConfig): handlerPtr;
    public removeWatch(ptr: handlerPtr): boolean;
    public close(): boolean;

    public static IN_ACCESS: Symbol & BASE_TYPE_IN;
    public static IN_ATTRIB: Symbol & BASE_TYPE_IN;
    public static IN_CLOSE_WRITE: Symbol & BASE_TYPE_IN;
    public static IN_CLOSE_NOWRITE: Symbol & BASE_TYPE_IN;
    public static IN_CREATE: Symbol & BASE_TYPE_IN;
    public static IN_DELETE: Symbol & BASE_TYPE_IN;
    public static IN_DELETE_SELF: Symbol & BASE_TYPE_IN;
    public static IN_MODIFY: Symbol & BASE_TYPE_IN;
    public static IN_MOVE_SELF: Symbol & BASE_TYPE_IN;
    public static IN_MOVED_FROM: Symbol & BASE_TYPE_IN;
    public static IN_MOVED_TO: Symbol & BASE_TYPE_IN;
    public static IN_OPEN: Symbol & BASE_TYPE_IN;
    public static IN_IGNORED: Symbol & BASE_TYPE_IN;
    public static IN_ISDIR: Symbol & BASE_TYPE_IN;
    public static IN_Q_OVERFLOW: Symbol & BASE_TYPE_IN;
    public static IN_UNMOUNT: Symbol & BASE_TYPE_IN;
    public static IN_ALL_EVENTS: Symbol & BASE_TYPE_IN;
    public static IN_ONLYDIR: Symbol & BASE_TYPE_IN;
    public static IN_DONT_FOLLOW: Symbol & BASE_TYPE_IN;
    public static IN_ONESHOT: Symbol & BASE_TYPE_IN;
    public static IN_MASK_ADD: Symbol & BASE_TYPE_IN;
    public static IN_CLOSE: Symbol & BASE_TYPE_IN;
    public static IN_MOVE: Symbol & BASE_TYPE_IN;
}
