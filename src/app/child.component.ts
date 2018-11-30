import { Component, Inject } from '@angular/core';
import { Emitter, SelectedEmitter } from '../../projects/ng-channels/src/lib';

@Component({
  selector: 'app-child',
  template: '{{ emitter }}'
})
export class ChildComponent {
  constructor(
    @Inject(SelectedEmitter) public emitter: Emitter<any>
  ) {
    console.log(emitter);

    setInterval(() => this.emitter.emit(15), 3000);
  }
}
