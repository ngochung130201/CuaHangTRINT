import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { faAngleLeft, faAngleRight, faBolt, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { Typeproduct } from './typeHome.type';
import SwiperCore, { Navigation, Pagination, Swiper, SwiperOptions } from 'swiper';
import { BannerService } from '../../services/banner/banner.service';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ProductClientService } from '../../services/productClient/product-client.service';
import { TypeProducts } from '../../types/product';
import { PostService } from '../../services/post.service';
import { TypePosts } from '../../types/post';
import { BrandService } from '../../services/brand.service';
import { TyBrand } from '../../types/brand';
import { ActivatedRoute, Router } from '@angular/router';
import { CommomService } from '../../services/commom.service';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {
  selectIndex = 0;
  logoImage: any = '../../assets/img/logo/logo1.svg'
  indicators = true;
  @Input() autoSilde = true;
  slideInteval = 3000;
  freeShip = faTruckFast;
  nextIcon = faAngleRight;
  leftIcon = faAngleLeft;
  faBolt = faBolt
  images: Array<any> = []
  public timeLeft: Date = new Date();
  listBanner: Array<string> = [
    'https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_topic/doraemons9_05_seriesdetailimagemobile-80424f74d030-1609395371290-iZgELVcX.png?v=0', 'https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_topic/doraemons9_05_seriesdetailimagemobile-80424f74d030-1609395371290-iZgELVcX.png?v=0'
  ]
  selectImage(index: number): void {
    this.selectIndex = index;
  }
  OnPrevClick(): void {
    if (this.selectIndex === 0) {
      this.selectIndex = this.images.length - 1;
    }
    else {
      this.selectIndex--;
    }
  }
  OnNextClick(): void {
    if (this.selectIndex === this.images.length - 1) {
      this.selectIndex++;
    }
    else {
      this.selectIndex++;
    }
  }
  constructor(private brandSerice:BrandService, 
    private route : ActivatedRoute,
    private router:Router,
    private commomService : CommomService,
    private BannerService: BannerService,private postService : PostService, config: NgbCarouselConfig,private productService : ProductClientService) {

    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
    this.getBanner()

    // if (this.autoSilde) {
    //   this.autoSildeImages();
    // }
 this.getProductCreateDate()
 this.getProductRecommended()
 this.getPostCreateDate()
 this.getBrand()
 this.getProductViewCountOne()
 this.getProductViewCount()
this.getData()
this.reloadCurrentRoute()
  }
  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.getBanner()
    if (this.autoSilde) {
      this.autoSildeImages();
    }
    this.reloadCurrentRoute()
  }
  autoSildeImages(): void {
    setInterval(() => {
      this.OnNextClick();
    }, this.slideInteval)
  }
  getBanner() {
    
  }
  getData() {
    this.route.queryParams.subscribe(res => {
     console.log(res)
      
   
      // Do something with the data
    });
  }
  listProduct: Array<TypeProducts> = []
  listPost: Array<TypePosts> = []
  listProductRecommended: Array<TypeProducts> = []
  listBlog: Array<Typeproduct> = [
    {
      id: "1",
      brand: 'ASUS',
      freeShip: true,
      image: 'https://cdn.nguyenkimmall.com/images/detailed/790/10051583-dien-thoai-samsung-a53-5g-128gb-xanh-1.jpg',
      name: 'Màn hình LCD ASUS VP249QGR (1920 x 1080/IPS/144Hz/1 ms/FreeSync)',
      percentPrice: 26900000,
      price: 3090000,
      reducedPrice: 12
    },
    {
      id: "1",
      brand: 'MSI',
      freeShip: true,
      image: 'https://cdn.nguyenkimmall.com/images/detailed/856/10054628-dien-thoai-samsung-galaxy-a14-5g-4gb-128gb-den-1.jpg',
      name: 'Màn hình LCD MSI PRO MP242C (1920 x 1080/VA/75Hz/1 ms)',
      percentPrice: 26900000,
      price: 3090000,
      reducedPrice: 12
    },
    {
      id: "1",
      brand: 'MSI',
      freeShip: true,
      image: 'https://cdn.nguyenkimmall.com/images/detailed/856/10054628-dien-thoai-samsung-galaxy-a14-5g-4gb-128gb-den-1.jpg',
      name: 'Màn hình LCD MSI PRO MP242C (1920 x 1080/VA/75Hz/1 ms)',
      percentPrice: 26900000,
      price: 3090000,
      reducedPrice: 12
    },

    {
      id: "1",
      brand: 'MSI',
      freeShip: true,
      image: 'https://cdn.nguyenkimmall.com/images/detailed/856/10054628-dien-thoai-samsung-galaxy-a14-5g-4gb-128gb-den-1.jpg',
      name: 'Màn hình LCD MSI PRO MP242C (1920 x 1080/VA/75Hz/1 ms)',
      percentPrice: 26900000,
      price: 3090000,
      reducedPrice: 12
    },





  ]
  listCategory: Array<Typeproduct> = [


    {
      id: "1",
      brand: 'MSI',
      freeShip: true,
      image: 'https://cdn.nguyenkimmall.com/images/detailed/856/10054628-dien-thoai-samsung-galaxy-a14-5g-4gb-128gb-den-1.jpg',
      name: 'Màn hình LCD MSI PRO MP242C (1920 x 1080/VA/75Hz/1 ms)',
      percentPrice: 26900000,
      price: 3090000,
      reducedPrice: 12
    },
    {
      id: "1",
      brand: 'MSI',
      freeShip: true,
      image: 'https://cdn.nguyenkimmall.com/images/detailed/856/10054628-dien-thoai-samsung-galaxy-a14-5g-4gb-128gb-den-1.jpg',
      name: 'Màn hình LCD MSI PRO MP242C (1920 x 1080/VA/75Hz/1 ms)',
      percentPrice: 26900000,
      price: 3090000,
      reducedPrice: 12
    },

    {
      id: "1",
      brand: 'MSI',
      freeShip: true,
      image: 'https://cdn.nguyenkimmall.com/images/detailed/856/10054628-dien-thoai-samsung-galaxy-a14-5g-4gb-128gb-den-1.jpg',
      name: 'Màn hình LCD MSI PRO MP242C (1920 x 1080/VA/75Hz/1 ms)',
      percentPrice: 26900000,
      price: 3090000,
      reducedPrice: 12
    },

    {
      id: "1",
      brand: 'MSI',
      freeShip: true,
      image: 'https://cdn.nguyenkimmall.com/images/detailed/856/10054628-dien-thoai-samsung-galaxy-a14-5g-4gb-128gb-den-1.jpg',
      name: 'Màn hình LCD MSI PRO MP242C (1920 x 1080/VA/75Hz/1 ms)',
      percentPrice: 26900000,
      price: 3090000,
      reducedPrice: 12
    },
    {
      id: "1",
      brand: 'MSI',
      freeShip: true,
      image: 'https://cdn.nguyenkimmall.com/images/detailed/856/10054628-dien-thoai-samsung-galaxy-a14-5g-4gb-128gb-den-1.jpg',
      name: 'Màn hình LCD MSI PRO MP242C (1920 x 1080/VA/75Hz/1 ms)',
      percentPrice: 26900000,
      price: 3090000,
      reducedPrice: 12
    },

    {
      id: "1",
      brand: 'MSI',
      freeShip: true,
      image: 'https://cdn.nguyenkimmall.com/images/detailed/856/10054628-dien-thoai-samsung-galaxy-a14-5g-4gb-128gb-den-1.jpg',
      name: 'Màn hình LCD MSI PRO MP242C (1920 x 1080/VA/75Hz/1 ms)',
      percentPrice: 26900000,
      price: 3090000,
      reducedPrice: 12
    },



  ]

  getProductCreateDate(){
    this.productService.getAllProductView(1,6,"createDate","desc").subscribe({
      next:(res=>{
        this.listProduct = res.data
        
      }),
      error:(err=>{

      })
    })
  }
  listProductViewCountOne : Array<TypeProducts> = [];
  getProductViewCountOne(){
    this.productService.getAllProductView(1,1,"viewCount","desc").subscribe({
      next:(res=>{
        this.listProductViewCountOne = res.data
        
      }),
      error:(err=>{

      })
    })
  }
  listProductViewCount : Array<TypeProducts> = [];
  getProductViewCount(){
    this.productService.getAllProductView(1,6,"viewCount","desc").subscribe({
      next:(res=>{
        this.listProductViewCount = res.data
        console.log(res.data)
      }),
      error:(err=>{

      })
    })
  }
  getPostCreateDate(){
    this.postService.getAllpostView(1,4,"createDate","desc").subscribe({
      next:(res=>{
        this.listPost = res.data
        
      }),
      error:(err=>{

      })
    })
  }
  listBrand : Array<TyBrand> = []
  getBrand(){
    this.brandSerice.getAllBrand().subscribe({
      next:(res=>{
        this.listBrand = res;
      })
    })
  }
  getProductRecommended(){
    this.productService.getAllProductView(1,17,"createDate","desc").subscribe({
      next:(res=>{
        this.listProductRecommended = res.data
        
      }),
      error:(err=>{

      })
    })
  }
  
  handleViewCount(slug:string){
    this.productService.UpdateViewCount(slug).subscribe({
      next:(res=>{
        console.log(res)
      })
    })
  }
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }
  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  onSwiper(swiper: Swiper) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
  setSwiperInstance(swiper: Swiper) {
    // setInterval(() => {
    //   swiper.slideNext();
    // }, 5000);
  }
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images2: any = ['https://lh3.googleusercontent.com/vkMMX2cvl_1ii0c_vw5TGy4ixhRc-l7OlMWnmx4-oxquqHo_A9aET_lWxDmxbh-GMZTr3O5JS4kGNa0Ka7hcctxo2lj0xoUR=w1920-rw', 'https://lh3.googleusercontent.com/w0v2cLKKzuaXTmYYuZfAfpMfH6_cHOtTO6cYZsjyOCfdZNz7NcyAGR962FteHA5Ob35H53mHNc9eqiNMT5aHAY5G90qOeKxz=w1920-rw', 'https://lh3.googleusercontent.com/NEyGqAS4HkBmVGWbdLxRCJ7v4n7Xz-Xcfs6ffoxCNZMHBg0txwJk7L0FVyBvjZ9mwdFsV915-uAWlcX_JPHD1yJSq2EYfeV6=w1920-rw']
}
