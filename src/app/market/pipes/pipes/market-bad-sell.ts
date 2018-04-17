import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'badSell'
})
export class BadSellPipe implements PipeTransform {
  transform(item: any, filter: any): boolean {
    return item.Stock > item.Demand && item.SellPrice / item.MeanPrice * 100 < filter.profitMargin - 10;
  }
}
