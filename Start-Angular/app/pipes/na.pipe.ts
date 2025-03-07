import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse' // Pipe name
})
export class NaPipe implements PipeTransform {

  transform(value: string): string {
    return value.split('').reverse().join(''); // Reverses the string
  }

}
