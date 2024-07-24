import { Component, OnInit } from '@angular/core';
import { Ibrand } from 'src/app/Interfaces/Ibrand';
import { BrandsService } from 'src/app/services/brands.service';

@Component({
  selector: 'app-Brands',
  templateUrl: './Brands.component.html',
  styleUrls: ['./Brands.component.css']
})
export class BrandsComponent implements OnInit {

  constructor(private _BrandsService:BrandsService) { }
  allbrands:Ibrand[]=[]
  loadingscreen=false

  ngOnInit() {
    this.loadingscreen=true
    this._BrandsService.GetAllBrands().subscribe( {
      next: (response) => {
        console.log(response);
        this.allbrands=response.data
        this.loadingscreen=false

      },
      error: (error) => {
        console.log(error);
        this.loadingscreen=false

      }
    });
  }

}
