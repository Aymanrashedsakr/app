import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Icategory } from 'src/app/Interfaces/Icategory';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home-categories-slider',
  templateUrl: './home-categories-slider.component.html',
  styleUrls: ['./home-categories-slider.component.css']
})
export class HomeCategoriesSliderComponent implements OnInit {
  lodingscreen=false
allcategoris:Icategory[]=[]
  constructor(private _ProductsService:ProductsService){}

  ngOnInit(): void {
    this.lodingscreen=true
    this._ProductsService.getAllcategories().subscribe({
      next:
      (response)=>{
        this.allcategoris=response.data
        this.lodingscreen=false
      },
      error:
      (error)=> {
        console.log(error);
        this.lodingscreen=false
      }
    })
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplaySpeed:100,
    autoplayHoverPause: true,
    margin: 10,
    stagePadding: 10,
    dots: true,
    navSpeed: 700,
    navText: ['prev','next'],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: true

  }



}




