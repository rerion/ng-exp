import { InjectionToken } from '@angular/core';
import { Emitter } from './emitter';
import { Receiver } from './receiver';


export interface Channel<T = any> {
  readonly name: string;
  readonly emitter: InjectionToken<Emitter<T>>;
  readonly receiver: InjectionToken<Receiver<T>>;
}

export function channel<T>(name?: string): Channel<T> {
  name = name || 'unnamed channel';

  return {
    name,
    emitter: new InjectionToken('[CHANNEL EMITTER] of ' + name),
    receiver: new InjectionToken('[CHANNEL RECEIVER] of ' + name),
  };
}

