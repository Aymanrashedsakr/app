import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/Auth.service';
import { CartService } from '../services/cart.service';
import { WishListService } from '../services/wish-list.service';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent {




  constructor(
    private _AuthService:AuthService,
    private _Router:Router,
    private CartService:CartService,
    private WishListService:WishListService
  ){}

  isLoding=false
ApiErrorMessage:string = ""




loginform:FormGroup=new FormGroup({

  email: new FormControl(null,[Validators.required,Validators.email]),
  password: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z].{5,}$/)]),
})


handellogin(logform:FormGroup){
  // console.log(logform.value);

  if(this.loginform.valid){
    this.isLoding=true
    this._AuthService.login(logform.value).subscribe({
      next:(response)=>{
        // console.log(response)
        localStorage.setItem('token',response.token)
        this.CartService.updateartItemcount()
        this.WishListService.updateLogedUserWishlistandcount()
        this._Router.navigate(['/home'])
        this._AuthService.isLoggedInSubject.next(true)
        this.isLoding=false
      },
      error:(err)=>{
        // console.log(err);
        // console.log(this.ApiErrorMessage=err.error.message);
        this.ApiErrorMessage=err.error.message
        this.isLoding=false
       }
    })
  }

}




}
