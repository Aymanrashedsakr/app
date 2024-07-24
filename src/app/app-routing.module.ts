import { authGuard } from './Gurads/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componts/home/home.component';
import { RegisterComponent } from './Register/Register.component';
import { LoginComponent } from './Login/Login.component';
import { CartComponent } from './componts/Cart/Cart.component';
import { CatergorisComponent } from './componts/Catergoris/Catergoris.component';
import { NotfoundedComponent } from './componts/Notfounded/Notfounded.component';
import { ForgetPasswordComponent } from './componts/forgetPassword/forgetPassword.component';
import { VerifyRestCodeComponent } from './componts/verify-rest-code/verify-rest-code.component';
import { RestpasswordComponent } from './componts/restpassword/restpassword.component';
import { noAuthGuard } from './Gurads/no-auth.guard';
import { ProductsComponent } from './componts/products/products.component';
import { ProductDetaleisComponent } from './componts/product-detaleis/product-detaleis.component';
import { ShippingAddressComponent } from './componts/shipping-address/shipping-address.component';
import { WishlistComponent } from './componts/wishlist/wishlist.component';
import { AllordersComponent } from './componts/allorders/allorders.component';
import { BrandsComponent } from './componts/Brands/Brands.component';
import { BrandDeatilsComponent } from './componts/brand-deatils/brand-deatils.component';
import { CategoriydeatelsComponent } from './componts/categoriydeatels/categoriydeatels.component';

const routes: Routes = [
{path:"",redirectTo:"home",pathMatch:"full"},
{path:"home",canActivate:[authGuard],component:HomeComponent},
{path:"cart", canActivate:[authGuard],component:CartComponent},
{path:"wishlist", canActivate:[authGuard],component:WishlistComponent},
{path:"allorders", canActivate:[authGuard],component:AllordersComponent},
{path:"Categories",canActivate:[authGuard],component:CatergorisComponent},
{path:"products/Categories/:id",canActivate:[authGuard],component:CategoriydeatelsComponent},
{path:"brands",canActivate:[authGuard],component:BrandsComponent},
{path:"products/brands/:id",canActivate:[authGuard],component:BrandDeatilsComponent},
{path:"products",canActivate:[authGuard],component:ProductsComponent},
{path:"shipingAddress/:id",canActivate:[authGuard],component:ShippingAddressComponent},
{path:"product/:id",canActivate:[authGuard],component:ProductDetaleisComponent},



{path:"Register", canActivate:[noAuthGuard],component:RegisterComponent},
{path:"Login",canActivate:[noAuthGuard],component:LoginComponent},
{path:"forgetpassword", canActivate:[noAuthGuard],component:ForgetPasswordComponent},
{path:"VerifyRestCode", canActivate:[noAuthGuard],component:VerifyRestCodeComponent},
{path:"Restpassword", canActivate:[noAuthGuard],component:RestpasswordComponent},
 {path:"**",component:NotfoundedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
