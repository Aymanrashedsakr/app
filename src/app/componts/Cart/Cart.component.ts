import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IProduct } from 'src/app/Interfaces/IProduct';
import { Icart } from 'src/app/Interfaces/Icart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-Cart',
  templateUrl: './Cart.component.html',
  styleUrls: ['./Cart.component.css']
})
export class CartComponent implements OnInit {
  lodingscreen=false
cartdeatiels:Icart |null =null
  constructor(private _CartService:CartService,private toastr: ToastrService) { }

  ngOnInit() {
    this.lodingscreen=true
    this._CartService.getUsercart().subscribe({
      next:(response)=>{
        // console.log(response.data);
        this.cartdeatiels=response.data;
        this.lodingscreen=false
      },
      error:(error)=>{console.log(error);
        this.lodingscreen=false
      }
    })
  }
  deletcartitems(id:string){
    this._CartService.deleteCartItem(id).subscribe({
      next:
      (response)=>{
        // console.log(response);
        this.cartdeatiels=response.data
        this._CartService.cartitemnumbersubgect.next(response.numOfCartItems)
        this.toastr.error('delete', response.message,{
          positionClass: 'toast-top-right',
          timeOut: 3000,
          closeButton: true,
          progressBar: true,
          progressAnimation: 'increasing',
        });
        if (response.numOfCartItems === 0) {
          this.cartdeatiels = null;
        }
      },
      error:(err)=>{
        console.log(err);
        this.toastr.error('An error occurred while removing the item');
       }}
      )
    }

    updatecartitem(id:string,count:string|number){
      this._CartService.updateCartItem(id,count).subscribe({
        next:
        (response)=>{
          // console.log(response);
          this.cartdeatiels=response.data
          this.toastr.success('updated', response.message,{
            positionClass: 'toast-top-right',
            timeOut: 3000,
            closeButton: true,
            progressBar: true,
            progressAnimation: 'increasing',
          });
        },
        error:(err)=>{
          console.log(err);
         }


      })
    }

    clearCartItem(){
      this._CartService.ClearCartItems().subscribe({
        next:(respons)=>{console.log(respons);
          if(respons.message === 'success')
          {
            this.cartdeatiels=null
            this._CartService.cartitemnumbersubgect.next(0)
            this.toastr.success('cleared', respons.message,{
              positionClass: 'toast-top-right',
              timeOut: 3000,
              closeButton: true,
              progressBar: true,
              progressAnimation: 'increasing',
            });
          }

        },
        error:(err)=>{
          if(err.states==404){
            // this._CartService.cartitemnumbersubgect.next(0)
            this.cartdeatiels=null
            this.toastr.error('error', 'your cart is empty',{
              positionClass: 'toast-top-right',
              timeOut: 3000,
              closeButton: true,
              progressBar: true,
              progressAnimation: 'increasing',
            });
          }
        }
      })
    }


  }


