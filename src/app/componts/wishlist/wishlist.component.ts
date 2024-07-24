import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IProduct } from 'src/app/Interfaces/IProduct';
import { CartService } from 'src/app/services/cart.service';
import { WishListService } from 'src/app/services/wish-list.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  constructor(private WishListService:WishListService,private _CartService:CartService,private toastr: ToastrService){}
  wislistdeatiel:IProduct [] |null =null
  count?:number=0
  lodingScreen=false
ngOnInit(): void {
  this.getwishlist()
}
getwishlist(){
  this.lodingScreen=true
  this.WishListService.Getloggeduserwishlist().subscribe({
    next: (response) => {
      console.log(response);
      this.wislistdeatiel=response.data
      this.WishListService.wishlistitemnumbersubgect.next((response.data).length)
      this.count=response.count
      this.lodingScreen=false
    },
    error: (error) => {
      console.log(error);
      this.lodingScreen=false
    }
  })
}

  removefromwishlist(id:string){
    this.lodingScreen=true
    this.WishListService.Removeproductfromwishlist(id).subscribe({
      next: (response) => {
        console.log(response);
        this.wislistdeatiel=response.data
        this.count=response.count
        this.WishListService.wishlistitemnumbersubgect.next((response.data).length)
        this.toastr.info('removed', response.message,{
          positionClass: 'toast-top-right',
          timeOut: 3000,
          closeButton: true,
          progressBar: true,
          progressAnimation: 'increasing',
        });
          // Check if the cart is empty and clear it if needed
          if (response.numOfCartItems === 0) {
            this.wislistdeatiel = null;
          }
        this.lodingScreen=false
        this.getwishlist()

      },
      error: (error) => {
        console.log(error);
      }
    })
    // this.getwishlist()

  }

  addtocart(id:string){
    this._CartService.addCartIteams(id).subscribe({
      next:
      (response)=>{
        // console.log(response);
        this._CartService.cartitemnumbersubgect.next(response.numOfCartItems)
        this.toastr.success('Added', response.message,{
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
