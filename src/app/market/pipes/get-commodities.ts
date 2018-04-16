import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MarketToolbarState } from '../market-toolbar/market-toolbar.reducer';

@Pipe({
  name: 'getCommodities'
})
export class GetCommoditiesPipe implements PipeTransform {
  transform(category: string, categories: object, filter: MarketToolbarState): any[] {
    const c = categories[category];
    if (!c) {
      return [];
    }
    let commodities = c.commodities;
    commodities = commodities.filter((commodity: any) => commodity.Name_Localised.toLowerCase().includes(filter.searchQuery.toLowerCase()));
    if (filter.filterUnprofitable) {
      commodities = commodities.filter((item) => item.Stock < item.Demand && item.SellPrice / item.MeanPrice * 100 > filter.profitMargin);
    }
    return commodities;
  }
}
