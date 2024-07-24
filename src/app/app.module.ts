import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppComponent } from './app.component';
import { HomeComponent } from './componts/home/home.component';
import { RegisterComponent } from './Register/Register.component';
import { LoginComponent } from './Login/Login.component';
import { NotfoundedComponent } from './componts/Notfounded/Notfounded.component';
import { ForgetPasswordComponent } from './componts/forgetPassword/forgetPassword.component';
import { CartComponent } from './componts/Cart/Cart.component';
import { BrandsComponent } from './componts/Brands/Brands.component';
import { CatergorisComponent } from './componts/Catergoris/Catergoris.component';
import { NavbarComponent } from './componts/navbar/navbar.component';
import { VerifyRestCodeComponent } from './componts/verify-rest-code/verify-rest-code.component';
import { RestpasswordComponent } from './componts/restpassword/restpassword.component';
import { ProductComponent } from './componts/product/product.component';
import { ProductsComponent } from './componts/products/products.component';
import { ProductDetaleisComponent } from './componts/product-detaleis/product-detaleis.component';
import { HomeCategoriesSliderComponent } from './componts/home-categories-slider/home-categories-slider.component';
import { HomeMainSliderComponent } from './componts/home-main-slider/home-main-slider.component';
import { AuthInterceptor } from './interseptoris/auth.interceptor';
import { ShippingAddressComponent } from './componts/shipping-address/shipping-address.component';
import { SearchPipe } from './pipes/search.pipe';
import { WishlistComponent } from './componts/wishlist/wishlist.component';
import { AllordersComponent } from './componts/allorders/allorders.component';
import { BrandDeatilsComponent } from './componts/brand-deatils/brand-deatils.component';
import { CutTitlePipe } from './pipes/cut-title.pipe';
import { CategoriydeatelsComponent } from './componts/categoriydeatels/categoriydeatels.component';
import { LoadingComponent } from './componts/loading/loading.component';
import { FooterComponent } from './componts/footer/footer.component';
import {NgxPaginationModule} from 'ngx-pagination'
import {  CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { NgxSpinnerModule } from "ngx-spinner";
import { LodingInterceptor } from './interseptoris/loding.interceptor';




@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      RegisterComponent,
      LoginComponent,
      CartComponent,
      BrandsComponent,
      CatergorisComponent,
      NotfoundedComponent,
      ForgetPasswordComponent,
      NavbarComponent,
      VerifyRestCodeComponent,
      RestpasswordComponent,
      ProductComponent,
      ProductsComponent,
      ProductDetaleisComponent,
      HomeCategoriesSliderComponent,
      HomeMainSliderComponent,
      ShippingAddressComponent,
      SearchPipe,
      WishlistComponent,
      AllordersComponent,
      BrandDeatilsComponent,
      CutTitlePipe,
      CategoriydeatelsComponent,
      LoadingComponent,
      FooterComponent,



   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    ToastrModule.forRoot(), // ToastrModule added
    NgxPaginationModule,
    NgxSpinnerModule



  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },{
    provide:HTTP_INTERCEPTORS,
    useClass: LodingInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
