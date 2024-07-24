import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutTitle'
})
export class CutTitlePipe implements PipeTransform {

  transform(productTitle: string, numofWords: number): string {
    return productTitle.split( " ").slice(0,numofWords).join(" ");
  }

}
