import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'profit'
})
export class ProfitPipe implements PipeTransform {
  transform(item: any): string {
    let percentage = item.SellPrice / item.MeanPrice * 100;
    if (percentage < 100) {
      percentage = (100 - percentage) * -1;
    }
    return `${percentage.toFixed(2)}%`;
  }
}
