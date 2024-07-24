import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Interfaces/IProduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',

  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private _ProductsService:ProductsService){}
  lodingscreen=false
  allproduct:IProduct[]=[]
  searchitem:string=""
  pageSize:number=0 // limit
  currentPage:number=0
  total:number=0 // results
ngOnInit(): void {
  this.lodingscreen=true
  this._ProductsService.getAllProducts().subscribe({

    next: (response) => {
      console.log(response);
      this.allproduct = response.data;
      this.total=response.results;
      this.pageSize=response.metadata.limit;
      this.currentPage=response.metadata.currentPage;
      this.lodingscreen=false
    },
    error: (error) => {
      console.log(error);
      this.lodingscreen=false
    }
  })
}


pageChanged(event:any){
  this.lodingscreen=true
  this._ProductsService.getAllProducts(event).subscribe({

    next: (response) => {
      console.log(response);
      this.allproduct = response.data;
      this.total=response.results;
      this.pageSize=response.metadata.limit;
      this.currentPage=response.metadata.currentPage;
      this.lodingscreen=false
    },
    error: (error) => {
      console.log(error);
      this.lodingscreen=false
    }})

}


}
