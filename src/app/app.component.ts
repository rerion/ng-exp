import { Component, Inject, OnInit } from '@angular/core';
import { Emitter, Receiver } from 'ng-channels';
import { GeneralChannel } from './general.channel';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'ng-exp';

  constructor(
    @Inject(GeneralChannel.emitter) public emitter: Emitter<any>,
    @Inject(GeneralChannel.receiver) public receiver: Receiver<any>,
  ) {
  }

  ngOnInit() {
    this.receiver.receive().subscribe(console.log);

    setInterval(() => {
      this.emitter.emit('WOOOOHOOO');
    }, 2000);
  }
}
