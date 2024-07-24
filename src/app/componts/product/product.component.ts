import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IProduct } from 'src/app/Interfaces/IProduct';
import { CartService } from 'src/app/services/cart.service';
import { WishListService } from 'src/app/services/wish-list.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


constructor(private _CartService:CartService, private _WishListService:WishListService,private toastr: ToastrService){}
  // @Input() product!:IProduct
  @Input() product!:IProduct
  wishlistcurrentIds:string[]= []


  ngOnInit(): void {
    this._WishListService.wishlistIDsubject.subscribe((idslist)=>{this.wishlistcurrentIds=idslist})
    // this._WishListService.wishlistitemnumbersubgect.subscribe((wishnum)=>{this.wishlistitemNumber=wishnum})

  }

  additemsToCart(id:string){
    this._CartService.addCartIteams(id).subscribe({
      next:(response)=>{
        console.log(response);
        this._CartService.cartitemnumbersubgect.next(response.numOfCartItems);

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
        this._WishListService.wishlistIDsubject.next(response.data)
        this._WishListService.wishlistitemnumbersubgect.next((response.data ).length)

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
isWishlist(id:string){
  return this.wishlistcurrentIds.includes(id) //true / false

}
}
