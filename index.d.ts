declare module "not.js" {
    export interface Builder<T> {
        basepath: string;
        complete(): T;
        reset(): void;
        pushStartToken(name: string): void;
        rewriteStartTokenAttributes<O>(obj: O): void;
        pushEndToken(name: string): void;
        pushSingleToken(name: string): void;
        rewriteSingleTokenAttributes<O>(obj: O): void;
        pushRaw(str: string, noEscape?: boolean): void;
        addClass(className: string): void;
        dropLastToken(): void;
    }
    class StringBuilder implements Builder<string> {
        constructor(basepath: string);
        basepath: string;
        buffer: string[];
        complete(): string;
        reset(): void;
        pushStartToken(name: string): void;
        rewriteStartTokenAttributes<O>(obj: O): void;
        pushEndToken(name: string): void;
        pushSingleToken(name: string): void;
        rewriteSingleTokenAttributes<O>(obj: O): void;
        pushRaw(str: string, noEscape?: boolean): void;
        addClass(className: string): void;
        dropLastToken(): void;
    }
    export const string: typeof StringBuilder;
    export interface Options<T> {
        explicit: boolean;
        builder: Builder<T>;
        scope: any;
    }
    export interface ExpressCallback {
        (err: any, result: string): void;
    }
    export interface Context {
        <K extends string, T>(name: K, object: T): {[KK in K]: T};
        collect(): string;
        restart(): void;
    }
    export function create<T>(builder?: Builder<T>): Context;
    export function prepareFunc<T>(func: Function, builder?: Builder<T>, basepath?: string): (scope: any) => string;
    export function renderFunc<T>(func: Function, scope?: any, builder?: Builder<T>, basepath?: string): string;
    export function renderPath(path: string, callback: ExpressCallback): void;
    export function renderPath<T>(path: string, options: Options<T>, callback: ExpressCallback): void;
}
