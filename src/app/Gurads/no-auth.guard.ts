import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const noAuthGuard: CanActivateFn = (route, state) => {

  let router=inject(Router)


// return!localStorage.getItem("token")?true:router.navigateByUrl("/login")

if(
 !localStorage.getItem("token")
)
{
  return true
}
else{
  router.navigate(["/home"])
  return false
}



};
