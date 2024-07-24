import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.css']
})
export class ShippingAddressComponent implements OnInit {
isloading:boolean=false
  constructor(private _CartService:CartService , private _ActivatedRoute:ActivatedRoute){}

shippingAddressform:FormGroup=new FormGroup({
  details:new FormControl(null,Validators.required),
  phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
  city:new FormControl(null,Validators.required)
})

cartId:string|null=""
ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe((params)=>{
    // console.log(params);
this.cartId=params.get('id')
  })

}
navigateToPaymentpage(url:string){
  window.location.href=url
}

handelFormAdderess(shippingADD:FormGroup){
  // console.log(shippingADD.value);
  if(this.shippingAddressform.valid){
    this.isloading=true
    this._CartService.OnlinePayment(this.cartId,shippingADD.value).subscribe({
      next:(Response)=>{console.log(Response);
        this.navigateToPaymentpage(Response.session.url)
        this.isloading=false

      },
      error:(err)=>{console.log(err);
      }
    })

  }


}











}
