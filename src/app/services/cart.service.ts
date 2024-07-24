import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit {


  cartitemnumbersubgect= new BehaviorSubject<number>(0)

  constructor(private _HttpClient:HttpClient ) {
   this.updateartItemcount()
  }

  updateartItemcount(){
    this.getUsercart().subscribe({
      next:(respnse)=>this.cartitemnumbersubgect.next(respnse.numOfCartItems),
      error:(err)=>{
        if(err.status == 404)
        {this.cartitemnumbersubgect.next(0)}
      }
      })

  }
  ngOnInit(): void {
        // this.getUsercart().subscribe((response)=>{this.cartitemnumbersubgect.next(response.numOfCartItems)})

  }


  // headers:any ={token:localStorage.getItem('token')}
  // we use interceptors to add headers to url


addCartIteams(id:string):Observable<any>{
  return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/cart',
    {
       "productId":id
      },
    // { headers:this.headers}
  );
}



getUsercart():Observable<any>{
  return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/cart',
    // {headers:this.headers}
  )
}

deleteCartItem(id:string):Observable<any>{
  return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
    // {headers:this.headers}
  )

}

updateCartItem(id:string, count:string|number):Observable<any>{
  return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
    { "count":count },
    // {headers:this.headers}
  )

}

ClearCartItems():Observable<any>{
  return this._HttpClient.delete('https://ecommerce.routemisr.com/api/v1/cart',
    // {headers:this.headers}
  )
}


OnlinePayment(cardId:any , shippingAddress:any):Observable<any>{
  return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cardId}?url=http://localhost:4200`,
    {shippingAddress:shippingAddress}
  )
}

offlinepayment(cardId:any,shippingAddress:any):Observable<any>{
  return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/${cardId}`,
    {"shippingAddress":shippingAddress}
  )
}








}
