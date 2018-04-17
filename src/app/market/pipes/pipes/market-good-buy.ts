import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'goodBuy'
})
export class GoodBuyPipe implements PipeTransform {
  transform(item: any, filter: any): boolean {
    return item.Stock < item.Demand && item.SellPrice / item.MeanPrice * 100 > filter.profitMargin;
  }
}
