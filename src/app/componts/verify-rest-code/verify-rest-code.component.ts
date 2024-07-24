import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth.service';

@Component({
  selector: 'app-verify-rest-code',
  templateUrl: './verify-rest-code.component.html',
  styleUrls: ['./verify-rest-code.component.css']
})
export class VerifyRestCodeComponent {


  constructor(private AuthService:AuthService, private _Router:Router ) { }

  ApiErrorMessage:string=""
  isLoding:boolean=false

  verifycodeform:FormGroup=new FormGroup(
    {
     resetCode:new FormControl(null,[Validators.required])
  }
  )
    handelrestcode(form:FormGroup){
      if(this.verifycodeform.valid){
        this.isLoding=true
        this.AuthService.verifyRestCode(form.value).subscribe({
          next:(response)=>{
            console.log(response);
            this._Router.navigateByUrl('/Restpassword')
          },
          error:(err)=>{
            console.log(err);
            this.ApiErrorMessage= err.error.message
            this.isLoding=false
          }
        })
      }
    }

}
