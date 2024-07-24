import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

constructor(private  _HttpClient:HttpClient ) { }



basuUrl='https://ecommerce.routemisr.com/api/v1/'


getAllProducts(pageNum:number= 1):Observable<any> {
  return this._HttpClient.get(this.basuUrl + `products?page=${pageNum}`)


}


getProductById(id:string):Observable<any>{
  return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
}

getAllcategories():Observable<any>{
  return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/categories")
}


getProductsByCategory(categoryId:string):Observable<any>{
  return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products?category=${categoryId}`)
}

getgetProductsBybrand(brandId:string):Observable<any>{
  return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products?brand=${brandId}`)
}


}
