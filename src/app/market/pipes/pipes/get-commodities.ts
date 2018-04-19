import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MarketToolbarState } from '../../components/market-toolbar/market-toolbar.component';

@Pipe({
  name: 'getCommodities'
})
export class GetCommoditiesPipe implements PipeTransform {
  transform(commodities: any[] = [], filter: MarketToolbarState = {} as any): any[] {

    let result = commodities;
    if (filter.searchQuery) {
      result = result.filter((commodity: any) =>
        commodity.Name_Localised.toLowerCase().includes(filter.searchQuery.toLowerCase())
      );
    }
    if (filter.filterUnprofitable) {
      result = result.filter(
        item => item.Stock < item.Demand && item.SellPrice / item.MeanPrice * 100 > filter.profitMargin
      );
    }
    return result;
  }
}
