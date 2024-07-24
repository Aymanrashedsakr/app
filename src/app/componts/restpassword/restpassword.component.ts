import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth.service';

@Component({
  selector: 'app-restpassword',
  templateUrl: './restpassword.component.html',
  styleUrls: ['./restpassword.component.css']
})
export class RestpasswordComponent {

  ApiErrorMessage:string="";
  isLoding:boolean=false



  constructor(private _AuthService:AuthService, private _Router:Router) { }


restpasswordForm:FormGroup = new FormGroup(
  {
  email:new FormControl(null,[Validators.required,Validators.email]),
  newPassword:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z].{5,}$/) ])
}
)



handelRestpassword(form:FormGroup){
  // console.log(form.value);
  if(this.restpasswordForm.valid){
    this.isLoding=true
    this._AuthService.resetPassword(form.value).subscribe({
      next:(response)=>{
        console.log(response);
        this._Router.navigate(['/Login'])
      },
      error:(error)=>{
        console.log(error);
        this.ApiErrorMessage=error.error.message
        this.isLoding=false
      }
    })
  }
}
}
