import { Component, HostListener, OnInit } from '@angular/core';
import { faBell, faUser } from '@fortawesome/free-regular-svg-icons';
import { faBars, faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import { itemFooter } from '../footer/footer.data';
import { menuUp } from './header.data';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService : AuthService,private router:Router) { }

  ngOnInit(): void {
 this.CovertToken()
 this.reloadCurrentRoute()
 this.countCart()
  }
  ngAfterViewInit(): void {
    document.onclick = (args: any): void => {
      if (args.target.tagName === 'BODY') {
        this.closeMenu()
      }
    }
  }
  isMenu: boolean = false;
  menuUp = menuUp;
  authIcon = faUser;
  searchIcon = faSearch;
  bellIcon = faBell;
  menuIcon = faBars;
  cartIcon = faCartShopping;
  isMobieHiden = true;
  faBar = faBars
  userName : string | null = '';
  isLogin : boolean = false
  handleMenuMoibe() {
    this.isMobieHiden = !this.isMobieHiden;;

  }

  isOpenedList: any;

  openMenu(source: any, isMenu: boolean) {
    this.isMenu = !isMenu;
    if (this.isMenu) {
      this.isOpenedList = source;
    }
    else {
      this.closeMenu()
    }
  }
  closeMenu() {
    this.isOpenedList = -1;
  }

  cates: Array<any> = [
    {
      id: 1,
      name: "All",
      slug: "san-pham",

    },
    {
      id: 2,
      name: "Điện thoại",
      slug: "dien-thoai",

    },
    {
      id: 3,
      name: "Phụ kiện",
      slug: "phu-kien",

    }

  ]
  onSearch : FormGroup = new FormGroup({
    search : new FormControl(),
  })
  menu2 = [
    {
      name :'Kênh Người Bán',
      link:'/trang-chu',
    },
    {
      name :'Trở thành Người bán HNH',
      link:'/gioi-thieu',
    },
    {
      name :'Tải ứng dụng',
      link:'/san-pham',
    },
    {
      name :'Kết nối',
      link:'/tin-tuc',
    },

  ]
  isLogout : boolean = false


  public CovertToken() :string | null{
    this.userName= this.authService.getDataUser()
    console.log(this.userName)
    return this.userName
    
      
     
    
  }
  // menuAuth = [
  //   {

  //     name :`${this.CovertToken() == null ? 'Đăng nhập' : `Tài khoản : ${this.CovertToken()}` }`  ,
  //     link:'/dang-nhap',
  //   },
  //   {
  //     name :`${this.CovertToken()== null ? 'Đăng kí' : ''}`,
  //     link:`${this.CovertToken()== null ? '/dang-ky'  : ''}`,
  //   },

  // ]
  menuArray : Array<any> = [{
    name:"Trang chủ"
  }]
  Logout(){
    localStorage.removeItem("tokenUser")
    this.authService.logout();
     this.router.navigate(['/'])
    this.reloadCurrentRoute()
  }
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
}

countCart(){
  const cart = localStorage.getItem("order")!.toString()
  const convertObject = JSON.parse(cart);
  console.log(convertObject.length-1)
}
}
