import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { Client } from 'nes';

@Injectable()
export class MarketStream {
  private subject: Subject<MessageEvent>;

  constructor() {}

  public connect(): Subject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.subscribe();
      console.log('Successfully connected');
    }
    return this.subject;
  }

  private subscribe(): Subject<MessageEvent> {
    const client = new Client('ws://localhost:12342');

    const observable = Observable.create((obs: Observer<MessageEvent>) => {
      client.onUpdate = obs.next.bind(obs);
      client.onError = obs.error.bind(obs);
      client.onDisconnect = obs.complete.bind(obs);
      client.connect();
    });
    const observer = {
      next: (data: Object) => client.request(JSON.stringify(data))
    };
    return Subject.create(observer, observable);
  }
}