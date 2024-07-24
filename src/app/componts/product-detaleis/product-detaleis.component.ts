import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { IProduct } from 'src/app/Interfaces/IProduct';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { WishListService } from 'src/app/services/wish-list.service';

@Component({
  selector: 'app-product-detaleis',
  templateUrl: './product-detaleis.component.html',
  styleUrls: ['./product-detaleis.component.css']
})



export class ProductDetaleisComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 1800,
    autoplayHoverPause: true,

    navSpeed: 700,
    navText: ['prev', 'next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

productId:string|null=null
productdeatils?:IProduct
  constructor(
    private _ActivatedRoute:ActivatedRoute ,
    private _ProductsService:ProductsService,
    private _WishListService:WishListService,
    private _CartService:CartService ,
    private toastr: ToastrService  ){}

  ngOnInit(): void {

    this._ActivatedRoute.paramMap.subscribe((param)=>{
      // console.log(param.get('id'));
      this.productId=param.get('id')
    })

if(this.productId!=null){
  this._ProductsService.getProductById(this.productId).subscribe(
    {
      next:(response)=>{
        // console.log(response);
        this.productdeatils=response.data
      },

      error:(err)=>{
        console.log(err);
      }
    }
  )
}

  }

  additemsToCart(id:string){
    this._CartService.addCartIteams(id).subscribe({
      next:
      (response)=>{
        // console.log(response);
        this._CartService.cartitemnumbersubgect.next(response.numOfCartItems)
        this.toastr.success('Added', 'product succes added to your cart',{
          positionClass: 'toast-top-right',
          timeOut: 3000,
          closeButton: true,
          progressBar: true,
          progressAnimation: 'increasing',
        });

      },
      error:(err)=>{console.log(err);
      }
    })


  }

  addToWishList(id:string){
    this._WishListService.addWishList(id).subscribe({
      next:(response)=>{
        console.log(response);
        this._WishListService.wishlistitemnumbersubgect.next((response.data as IProduct []).length)

        this.toastr.success('Added', 'product succes added to your wishlist',{
          positionClass: 'toast-top-right',
          timeOut: 3000,
          closeButton: true,
          progressBar: true,
          progressAnimation: 'increasing',
        });


      },
      error:(err)=>{console.log(err);
      }
    })





}


}
