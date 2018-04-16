import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyArray'
})
export class KeyArrayPipe implements PipeTransform {
  transform(array: any[] = []): any[] {
    return Object.keys(array);
  }
}
