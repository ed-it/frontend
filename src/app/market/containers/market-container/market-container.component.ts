import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/operators/switchMap';

@Component({
  selector: 'app-market-container',
  template: `
    <section id="market-container">
      <app-market-toolbar (filterUpdated)="onFilterUpdated($event)"></app-market-toolbar>
      <app-market-categories></app-market-categories>
    </section>
  `
})
export class MarketContainerComponent {
  onFilterUpdated(filter) {
    Observable.from(filter).switchMap((data: any) => {
      console.log(data);
      return Observable.of([]);
    });
    // console.log(filter);
  }
}
