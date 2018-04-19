import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isDisabled'
})
export class IsDisabledPipe implements PipeTransform {
  transform(commodities: any[] = [], filter: any = {}): boolean {
    if (filter.searchQuery) {
      commodities = commodities.filter((commodity: any) =>
        commodity.Name_Localised.toLowerCase().includes(filter.searchQuery.toLowerCase())
      );
    }
    if (filter.filterUnprofitable) {
      commodities = commodities.filter(
        item => item.Stock < item.Demand && item.SellPrice / item.MeanPrice * 100 > filter.profitMargin
      );
    }
    return commodities.length === 0;
  }
}
