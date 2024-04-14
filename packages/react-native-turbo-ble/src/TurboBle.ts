import { NativeModules } from 'react-native';

import { LINKING_ERROR } from './errors';

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;

const TurboBleModule = isTurboModuleEnabled
  ? require('./NativeTurboBle').default
  : NativeModules.TurboBle;

export const TurboBle = TurboBleModule
  ? TurboBleModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      },
    );
