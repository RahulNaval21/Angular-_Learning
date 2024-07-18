import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newPipr'
})
export class NewPiprPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
