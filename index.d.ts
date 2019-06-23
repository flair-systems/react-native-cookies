import { NativeModulesStatic } from 'react-native';

export const RNCookieManagerIOS: NativeModulesStatic.RNCookieManagerIOS;
export type RNCookieManagerIOS = NativeModulesStatic.RNCookieManagerIOS;

export const RNCookieManagerAndroid: NativeModulesStatic.RNCookieManagerAndroid;
export type RNCookieManagerAndroid = NativeModulesStatic.RNCookieManagerAndroid;

export const functions: string[];
export type functions = string[];

export const CookieManager: NativeModulesStatic;
export interface CookieManager {
  [key: functions]: any;
}
