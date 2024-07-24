import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Interfaces/IProduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lodingscreen=false
Searchitem:string=""
allProduct:IProduct[]=[]

  constructor(private _ProductsService:ProductsService ) { }

  ngOnInit() {
    this.lodingscreen=true
    this._ProductsService.getAllProducts().subscribe({
      next:
      (response)=>{
        // console.log(response)
        this.allProduct=response.data
        this.lodingscreen=false

      },
      error:(error)=>{console.log(error)
        this.lodingscreen=false
      }
    })

  }


  }


