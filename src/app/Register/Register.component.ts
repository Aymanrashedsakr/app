import { passwordmatch } from '../custom validitions/match-password';
import { Component} from '@angular/core';
import {  FormControl, FormGroup,Validators } from '@angular/forms';
import { AuthService } from '../services/Auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent  {

  constructor(private _AuthService:AuthService,private _Router:Router){}

  isLoding=false
ApiErrorMessage:string = ""

registerform:FormGroup=new FormGroup({


  name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
  email: new FormControl(null,[Validators.required,Validators.email]),
  password: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z].{5,}$/)]),
  rePassword: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z].{5,}$/)]),
  phone: new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
},{validators:passwordmatch})



handelRegistration(regform:FormGroup){
  // console.log(regform.value);

  if(this.registerform.valid){
    this.isLoding=true
    this._AuthService.register(regform.value).subscribe({
      next:(response)=>{
        // console.log(response)
        this._Router.navigate(['/Login'])
        this._AuthService.isLoggedInSubject.next(false)
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





