import { ModuleWithProviders, NgModule } from '@angular/core';
import { Channel } from './channel';
import { provideChannels } from './provide-channels';
import { SelectEmitterDirective, SelectReceiverDirective } from './select.directives';

@NgModule({
  declarations: [
    SelectEmitterDirective,
    SelectReceiverDirective
  ],
  exports: [
    SelectEmitterDirective,
    SelectReceiverDirective
  ]
})
export class ChannelsModule {
  static withChannels(channels: Channel[]): ModuleWithProviders<ChannelsModule> {

    return {
      ngModule: ChannelsModule,
      providers: [
        ...provideChannels(channels)
      ]
    };
  }
}

