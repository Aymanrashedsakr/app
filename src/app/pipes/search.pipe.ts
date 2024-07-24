import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../Interfaces/IProduct';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(productlist: IProduct[], searchTerm: string): IProduct[] {
    return productlist.filter((product)=> product.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
  }

}
