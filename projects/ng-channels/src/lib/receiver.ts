import { merge, Observable, OperatorFunction, Subject } from 'rxjs';

export interface Receiver<T = any> {
  receive(): Observable<T>;
}

export class Receiver<T = any> {
  private subject?: Subject<T>;

  constructor(subject: Subject<T>) {
    this.subject = subject;
  }

  static join<T>(...receivers: Receiver<T>[]): Receiver<T> {
    const merged = merge(
      ...receivers.map(r => r.receive())
    );

    return {
      receive: () => merged
    };
  }

  static pipe<T, R>(receiver: Receiver<T>, ...operators: OperatorFunction<any, any>[]): Receiver<R> {
    const transformed = receiver.receive().pipe(
      ...operators
    ) as Observable<R>;
    return {
      receive: () => transformed
    };
  }

  receive(): Observable<T> {
    return this.subject.asObservable();
  }
}
