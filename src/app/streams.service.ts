import { Injectable } from '@angular/core';
import * as Rx from 'rxjs/Rx';

import { Client } from 'nes';

@Injectable()
export class StreamsService {
  private subject: Rx.Subject<MessageEvent>;

  constructor() {}

  public connect(channel): Rx.Subject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.subscribe(channel);
      console.log('Successfully connected: ' + channel);
    }
    return this.subject;
  }

  private subscribe(channel): Rx.Subject<MessageEvent> {
    let client = new Client('ws://localhost:12342');
    console.log(client);

    let observable = Rx.Observable.create((obs: Rx.Observer<MessageEvent>) => {
      client.onUpdate = obs.next.bind(obs);
		  client.onError = obs.error.bind(obs);
		  client.onDisconnect = obs.complete.bind(obs);
		  return client.disconnect.bind(client);
    });
    let observer = {
      next: (data: Object) => {
        client.request(JSON.stringify(data));
      }
    };
    return Rx.Subject.create(observer, observable);
  }
}
