import type { WritableAtom } from 'jotai';

export type AtomHash<T extends Record<string, unknown>> = {
  [K in keyof T]: WritableAtom<T[K], any, any>;
};

export type Values<T extends Record<string, unknown>> = {
  [K in keyof T]: T[K];
};

export type Parameters<T extends Record<string, unknown>> = {
  atoms: AtomHash<T>;
  values: Values<T>;
};

export type JotaiParameters = {
  jotai?: Partial<Parameters<any>>;
};
