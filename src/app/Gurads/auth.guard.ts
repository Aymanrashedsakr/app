import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
let router= inject(Router)


//  return localStorage.getItem("token")? true : router.navigateByUrl("/login")>false

if(localStorage.getItem('token'))
{
  return true
}
else
{
router.navigate(["/Login"])
  return false
}

};
