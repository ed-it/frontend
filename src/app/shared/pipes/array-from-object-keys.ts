import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayFromObjectKeys'
})
export class ArrayFromObjectKeysPipe implements PipeTransform {
  transform(dataObj: Object = {}): string[] {
    const keys = Object.keys(dataObj);
    return keys || [];
  }
}
