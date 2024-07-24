import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild,  } from '@angular/core';
import { AuthService } from '../../services/Auth.service';
import { CartService } from 'src/app/services/cart.service';
import { WishListService } from 'src/app/services/wish-list.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userIsLoggedIn:boolean=false
  cartItemNUMBER:number=0
  wishlistitemNumber:number=0
    constructor(private _AuthService:AuthService, private _Renderer2:Renderer2 , private _CartService:CartService ,private _WishListService:WishListService ) { }

  ngOnInit() {

    this._AuthService.isLoggedInSubject.subscribe((isloged)=>{this.userIsLoggedIn=isloged})
    this._CartService.cartitemnumbersubgect.subscribe((cartnum)=>{this.cartItemNUMBER=cartnum})
    this._WishListService.wishlistitemnumbersubgect.subscribe((wishnum)=>{this.wishlistitemNumber=wishnum})

  }

  logOut(){
    this._AuthService.logout()
  }



@ViewChild('navbar')  navElment!:ElementRef
  @HostListener ('window:scroll')
  onScroll() {
    if (scrollY>500){
      this._Renderer2.addClass(this.navElment.nativeElement,'py-3' );
      this._Renderer2.addClass(this.navElment.nativeElement,'shadow' );


    }
    else {
      this._Renderer2.removeClass(this.navElment.nativeElement, 'py-3');
      this._Renderer2.removeClass(this.navElment.nativeElement,'shadow' );

    }

  }
  @ViewChild('navbarSupportedContent') navbarCollapse!: ElementRef;


  ngAfterViewInit(): void {
    this.setupNavbarToggler();
  }

  setupNavbarToggler(): void {
    document.querySelectorAll('.navbar-collapse a').forEach(anchor => {
      anchor.addEventListener('click', function () {
        // إذا كان شريط التنقل مفتوحًا، أغلقه
        const navbarCollapse = document.getElementById('navbarSupportedContent');
        if(navbarCollapse)
        if (navbarCollapse.classList.contains('show')) {
          navbarCollapse.classList.remove('show');
        }
      });
    });
  }


































}



// استهدف جميع الروابط في شريط التنقل


