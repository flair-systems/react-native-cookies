import { NativeModulesStatic } from 'react-native';

export const functions: string[];
export type functions = string[];

export interface Cookie {
  name: string;
  value: string;
  domain: string;
  origin: string;
  path?: string;
  version?: string;
}

export const CookieManager: NativeModulesStatic;
export interface CookieManager {
  getAll: (useWebKit?: boolean) => Promise<string>;
  clearAll: (useWebKit?: boolean) => Promise<string>;
  get: (url: string, useWebKit?: boolean) => Promise<string>;
  set: (cookie: Cookie, useWebKit?: boolean) => Promise<string>;
}
