
import { AbstractControl, ValidationErrors } from "@angular/forms";



 export let passwordmatch =(control:AbstractControl): ValidationErrors |null=>{

let{password,rePassword}=control.value



return password==rePassword && password &&rePassword ?null :{passwordMissmatch:true}




}
