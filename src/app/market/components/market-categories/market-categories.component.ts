import { Component } from '@angular/core';

@Component({
  selector: 'app-market-categories',
  template: `
    <ngb-tabset>
      <!-- <ngb-tab *ngFor="let category of marketData.params.categories | arrayFromObjectKeys | arraySort" [disabled]="category | isDisabled:marketData.params.categories:(filter$ | async) "> -->
      <ngb-tab>
        <ng-template ngbTabTitle><b></b></ng-template>
        <ng-template ngbTabContent></ng-template>
      </ngb-tab>
    </ngb-tabset>
  `
})
export class MarketCategoriesComponent {}
