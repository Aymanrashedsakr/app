import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth.service';

@Component({
  selector: 'app-forgetPassword',
  templateUrl: './forgetPassword.component.html',
  styleUrls: ['./forgetPassword.component.css']
})
export class ForgetPasswordComponent  {

  ApiErrorMessage:string=""
  isLoding:boolean=false
  constructor(private _AuthService:AuthService, private _Router:Router) { }
  forgetpassword:FormGroup= new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email])

  })

  handelForgetpassword(form:FormGroup){
    this.isLoding=true
    this._AuthService.forgetPassword(form.value).subscribe({
      next:(response)=>{
        // console.log(response);
        this.isLoding=false
        this._Router.navigate(['/VerifyRestCode'])

      },
      error:(err)=>{
        // console.log(err);
        this.isLoding=false
        this.ApiErrorMessage=err.error.message
      }
    })
  }

}
