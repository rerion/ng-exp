import { Subject } from 'rxjs';

export interface Emitter<T = any> {
  emit(value: T);
}

export class Emitter<T = any> {
  private subject?: Subject<T>;

  constructor(subject: Subject<T>) {
    this.subject = subject;
  }

  static multicast<T>(...emitters: Emitter<T>[]): Emitter<T> {
    return {
      emit(value: T) {
        emitters.forEach(e => e.emit(value));
      }
    };
  }

  static transform<T, R>(emitter: Emitter<T>, transformation: (t: R) => T): Emitter<R> {
    return {
      emit(value: R) {
        emitter.emit(transformation(value));
      }
    };
  }

  emit(value: T) {
    this.subject.next(value);
  }

}
