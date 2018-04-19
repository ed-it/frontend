import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { MarketToolbarState } from '../../components/market-toolbar/market-toolbar.component';

@Component({
  selector: 'app-market-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['market-table.component.scss'],
  template: `
  <table class="table table-bordered">
    <thead>
      <tr>
        <th scope="col">Item</th>
        <th scope="col">Buy</th>
        <th scope="col">Sell</th>
        <th scope="col">Mean</th>
        <th scope="col">Stock/Demand</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let item of commodities | getCommodities:filter | arraySort:'Name_Localised'"
      [ngClass]="{'table-success': item | goodBuy:filter, 'table-danger': item | badSell:filter }">
        <td>{{item.Name_Localised}}</td>
        <td>{{item.BuyPrice}}</td>
        <td>{{item.SellPrice}}</td>
        <td>{{item.MeanPrice}}</td>
        <td>{{item.Stock}} / {{item.Demand}}</td>
      </tr>
    </tbody>
  </table>
  `
})
export class MarketTableComponent {
  @Input() categoryKey: string;

  @Input() commodities: any[] = [];

  @Input() filter: MarketToolbarState;
}
