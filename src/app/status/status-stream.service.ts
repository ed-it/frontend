import { Injectable } from '@angular/core';
import * as Rx from 'rxjs/Rx';

import { Client } from 'nes';

@Injectable()
export class StatusStream {
  private subject: Rx.Subject<MessageEvent>;

  constructor() {}

  public connect(): Rx.Subject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.subscribe();
      console.log('Status Stream connected');
    }
    return this.subject;
  }

  private subscribe(): Rx.Subject<MessageEvent> {
    let client = new Client('ws://localhost:12342');

    let observable = Rx.Observable.create((obs: Rx.Observer<MessageEvent>) => {
      client.onUpdate = obs.next.bind(obs);
      client.onError = obs.error.bind(obs);
      client.onDisconnect = obs.complete.bind(obs);
      client.connect();
    });
    let observer = {
      next: (data: Object) => {
        console.log(data);
        client.request(JSON.stringify(data));
      }
    };
    return Rx.Subject.create(observer, observable);
  }
}
