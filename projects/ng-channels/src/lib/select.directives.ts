import { Directive, ExistingProvider, InjectionToken, Input } from '@angular/core';
import { Receiver } from './receiver';
import { Emitter } from './emitter';


export const SelectedEmitter = new InjectionToken<Emitter>('Provided emitter');
export function provideSelectedEmitter<T>(existing: T): ExistingProvider {
  return {
    provide: SelectedEmitter,
    useExisting: existing
  };
}

@Directive({
  selector: '[selectEmitter]',
  providers: [ provideSelectedEmitter(SelectEmitterDirective) ]
})
export class SelectEmitterDirective<T> implements Emitter<T> {
  @Input() selectEmitter!: Emitter<T>;

  emit(value: T) {
    this.selectEmitter.emit(value);
  }
}

export const SelectedReceiver = new InjectionToken<Receiver>('Provided receiver');
export function provideSelectedReceiver<T>(existing: T): ExistingProvider {
  return {
    provide: SelectedReceiver,
    useExisting: existing
  };
}

@Directive({
  selector: '[selectReceiver]',
  providers: [ provideSelectedReceiver(SelectReceiverDirective) ]
})
export class SelectReceiverDirective<T> implements Receiver<T> {
  @Input() selectReceiver!: Receiver<T>;

  receive() {
    return this.selectReceiver.receive();
  }
}
