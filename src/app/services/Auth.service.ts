import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  isLoggedInSubject = new BehaviorSubject<boolean>(localStorage.getItem('token')?true:false)

constructor(private _HttpClient:HttpClient,private _Router:Router ) { }






//====> api register
register(regform:object):Observable <any>
{

  return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',regform);

}

//=====> api login
login(logform:Object):Observable<any>{

  return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',logform);


}

logout()
{
  // remove token
  localStorage.removeItem('token')
  // redirect to login page
  this._Router.navigate(['/Login'])

  this.isLoggedInSubject.next(false);


}


forgetPassword(forgetPasswordForm:any):Observable<any>{
  return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',forgetPasswordForm);

}

verifyRestCode(form:any) :Observable<any>{
  return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',form);
}


resetPassword(form:any) :Observable<any>{
  return this._HttpClient.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword',form);
}

}
