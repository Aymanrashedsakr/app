import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Ibrand } from 'src/app/Interfaces/Ibrand';
import { BrandsService } from 'src/app/services/brands.service';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct } from 'src/app/Interfaces/IProduct';

@Component({
  selector: 'app-brand-deatils',
  templateUrl: './brand-deatils.component.html',
  styleUrls: ['./brand-deatils.component.css']
})
export class BrandDeatilsComponent implements OnInit {
  constructor(private _ActivatedRoute:ActivatedRoute ,private _ProductsService:ProductsService){}
  lodingscreen=false
  brandId:string|null=null
  branddeatils:IProduct[]=[]

ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe((param)=>{
    // console.log(param);

    this.brandId=param.get('id')
  })



  if(this.brandId!=null){
    this.lodingscreen=true
    this._ProductsService.getgetProductsBybrand(this.brandId).subscribe({
      next:
      (response)=>{
        console.log(response);
        this.branddeatils=response.data
        this.lodingscreen=false

      },
      error:
      (error)=> {
        console.log(error);
        this.lodingscreen=false
      }
    })
  }

}

}
