import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newPipe'
})
export class NewPipePipe implements PipeTransform {

  transform(value: string,): number {
    return value.indexOf('N');
  }

}
