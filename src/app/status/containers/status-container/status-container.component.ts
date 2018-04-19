import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as statusModels from '../../models';
import * as statusStore from '../../store';

@Component({
  selector: 'app-status-container',
  styleUrls: ['status-container.component.scss'],
  template: `
    <div class="status-data card">
      <div class="card-body" *ngIf="data$ | async; let data; else noData">
        <app-pips-display [pips]="data?.params?.pips"></app-pips-display>
        <app-ship-status [currentShip]="data?.params?.currentShip" [status]="data?.params?.status"></app-ship-status>
      </div>
      <ng-template #noData>
        <h2>No Data</h2>
      </ng-template>
    </div>
  `
})
export class StatusContainerComponent implements OnInit, OnDestroy {

  data$: Observable<statusModels.StatusReponse>;

  constructor(private store: Store<statusModels.StatusToolState>) {}

  ngOnInit() {
    this.data$ = this.store.pipe(select(statusStore.getStatusData));
  }

  ngOnDestroy() {}
}
