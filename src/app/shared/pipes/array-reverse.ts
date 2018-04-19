import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayReverse'
})
export class ArrayReversePipe implements PipeTransform {
  transform(dataArray: any[] = []): any[] {
    return (dataArray && dataArray.reverse()) || [];
  }
}
