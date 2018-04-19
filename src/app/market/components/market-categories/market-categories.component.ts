import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { MarketToolbarState } from '../market-toolbar/market-toolbar.component';

@Component({
  selector: 'app-market-categories',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ngb-tabset>
      {{categories | json}}
      <ngb-tab *ngFor="let category of keys | arraySort" [disabled]="getCommodities(category) | isDisabled:filter">
        <ng-template ngbTabTitle><b>{{category}}</b></ng-template>
        <ng-template ngbTabContent>
          <app-market-table [categoryKey]="category" [commodities]="getCommodities(category)" [filter]="filter"></app-market-table>
        </ng-template>
      </ngb-tab>
    </ngb-tabset>
  `
})
export class MarketCategoriesComponent {
  @Input() keys: string[];

  @Input() categories: any;

  @Input() filter: MarketToolbarState;

  getCommodities(category) {
    if (this.categories) {
      return this.categories[category] || [];
    }
    return [];
  }
}
