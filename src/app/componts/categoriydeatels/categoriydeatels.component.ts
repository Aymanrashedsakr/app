import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Interfaces/IProduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-categoriydeatels',
  templateUrl: './categoriydeatels.component.html',
  styleUrls: ['./categoriydeatels.component.css']
})
export class CategoriydeatelsComponent implements OnInit {
  constructor(private _ProductsService:ProductsService , private _ActivatedRoute:ActivatedRoute){}
  lodingscreen=false
categoryid:string|null=""
allproduct:IProduct[]=[]
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((param)=>{
      this.categoryid=param.get('id')
      // console.log(this.categoryid);
    })
if(this.categoryid)
{
  this.lodingscreen=true
this._ProductsService.getProductsByCategory(this.categoryid).subscribe({
  next:
  (response)=>{
    console.log(response);
    this.allproduct=response.data
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
