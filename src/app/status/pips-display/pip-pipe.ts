import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'pipDisplay' })
export class PipDisplayPipe implements PipeTransform {
  transform(val: number): string {
    if (val === 2) {
      return 'active';
    } else if (val === 1) {
      return 'half-active';
    } else {
      return 'off';
    }
  }
}
