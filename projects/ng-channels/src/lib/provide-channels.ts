import { Provider } from '@angular/core';
import { Subject } from 'rxjs';

import { Channel} from './channel';
import { Emitter } from './emitter';
import { Receiver } from './receiver';



export function provideChannels(channels: Channel[]): Provider[] {
  const providers: Provider[] = [];

  channels.forEach(channel => {
    const subject = new Subject();
    const receiver = new Receiver(subject);
    const emitter = new Emitter(subject);

    providers.push(
      {
        provide: channel.receiver,
        useValue: receiver
      },
      {
        provide: channel.emitter,
        useValue: emitter
      }
    );
  });

  return providers;
}
