import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isDisabled'
})
export class IsDisabledPipe implements PipeTransform {
  transform(category: string, categories: any[] = [], filter: any): boolean {
    const c = categories[category];
    if (!c) {
      return true;
    }

    let commodities = c.commodities;
    commodities = commodities.filter((commodity: any) =>
      commodity.Name_Localised.toLowerCase().includes(filter.searchQuery.toLowerCase())
    );
    if (filter.filterUnprofitable) {
      commodities = commodities.filter(
        item => item.Stock < item.Demand && item.SellPrice / item.MeanPrice * 100 > filter.profitMargin
      );
    }
    return commodities.length === 0;
  }
}
