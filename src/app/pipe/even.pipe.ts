import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'even'
})
export class EvenPipe implements PipeTransform {

  transform(array: Array<number>): unknown {
    return array.filter(n => n % 2 == 0);
  }

}
