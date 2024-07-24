import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProduct } from '../Interfaces/IProduct';

@Injectable({
  providedIn: 'root'
})
export class WishListService  {

wishlistIDsubject = new BehaviorSubject<string[]>([])
  wishlistitemnumbersubgect= new BehaviorSubject<number>(0)

  constructor(private _HttpClient:HttpClient ) {
this.updateLogedUserWishlistandcount()
   }

   updateLogedUserWishlistandcount(){
    this.Getloggeduserwishlist().subscribe(
      {
      next: (response) => {
        console.log(response);
        console.log((response.data as IProduct []).map((product)=>product._id));
        this.wishlistIDsubject.next((response.data as IProduct []).map((product)=>product._id))
        this.wishlistitemnumbersubgect.next((response.data).length)
      },
      error: (error) => {
        console.log(error);
      }
    })
   }

// ngOnInit(): void {
//   this.Getloggeduserwishlist().subscribe((response)=>{this.wishlistitemnumbersubgect.next(response.count)})
// this.Getloggeduserwishlist().subscribe((respone)=>{this.wishlistIDsubject.next(respone.data)})

// }

  addWishList(id:string):Observable<any>{
    return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/wishlist",
      { "productId": id }
    )

  }

  Getloggeduserwishlist():Observable<any>{
    return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/wishlist",)


  }


Removeproductfromwishlist(id:string):Observable<any>{
  return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,)
}





}
