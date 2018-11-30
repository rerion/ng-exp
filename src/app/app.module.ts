import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChannelsModule } from 'ng-channels';

import { AppComponent } from './app.component';
import { GeneralChannel } from './general.channel';
import { ChildComponent } from './child.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
  ],
  imports: [
    ChannelsModule.withChannels([
      GeneralChannel
    ]),
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
