import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild, ViewEncapsulation } from '@angular/core';
import { faTruckFast, faShield, faRotateLeft, faGear, faLaptop, faChevronCircleRight, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { TyProductDetail } from './productdetail.type';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { Typeproduct } from '../home/typeHome.type';
import SwiperCore, { Navigation, Pagination, Swiper } from 'swiper';
import { isPlatformBrowser } from '@angular/common';
import { ProductClientService } from '../../services/productClient/product-client.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

import { OrderClientService } from '../../services/OrderClient/order-client.service';
import { TypeProducts } from '../../types/product';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductCommnentService } from '../../services/product-commnent.service';
import { NgToastService } from 'ng-angular-popup';
import { TypeProductCommnent } from '../../types/productComment';
import { OrderService } from '../../services/order.service';
import { TypeAddOrder } from '../../types/order';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],

})
export class ProductDetailComponent implements OnInit {

  constructor(
   
    private productComment : ProductCommnentService,
    private toast : NgToastService,
    private productService: ProductClientService, 
    private orderSevice:OrderClientService
    ,
    private router : Router,
    private _routerAc: ActivatedRoute
    
    ,
    private orderService: OrderService

  ) { }
  freeShip = faTruckFast;
  faShield = faShield;
  faRoteleLeft = faRotateLeft;
  faGear = faGear;
  faLaptop = faLaptop;
  faRight = faChevronRight;
  isNavigation: boolean = false;
  brandName: string = '';
  productCategory!: string;
  supplierName!: string;
  productName! :string;
  brandID: number = 0;
  productID! : string;

  ngOnInit(): void {
    this.slug = this._routerAc.snapshot.params['slug'];
    this.getProductCommnent()
   
   this.getProduct( this.slug)
  }

  listService: Array<TyProductDetail> = [{
    id: '1',
    title: 'Chính sách bán hàng',
    items: [{
      icon: faTruckFast,
      text: 'Miễn phí giao hàng cho đơn hàng từ 800K'
    },
    {
      icon: faShield,
      text: 'Cam kết hàng chính hãng 100%'
    },
    {
      icon: faRotateLeft,
      text: 'Đổi trả trong vòng 10 ngày'
    },

    ]

  },
  {
    id: '2',
    title: 'Dịch vụ khác',
    items: [{
      icon: faGear,
      text: 'Sửa chữa đồng giá 150.000đ.'
    },
    {
      icon: faLaptop,
      text: 'Vệ sinh máy tính, laptop.'
    },
    {
      icon: faShield,
      text: 'Bảo hành tại nhà.'
    },

    ]

  },


  ]
  IsfreeShip: boolean = true;

  settings = {
    counter: false,
    plugins: [lgZoom]
  };

  quantity : number = 1;
 
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };

  showNavigation(): boolean {
    return this.isNavigation = !this.isNavigation;
  }
  setSwiperInstance(swiper: Swiper) {
    // setInterval(() => {
    //   swiper.slideNext();
    // }, 3000);
  }
  slug: string = '';
 product! : TypeProducts;
 imageProduct! : string;
 getProduct(slug:string){
  this.productService.getProductBySlug(slug).subscribe({
    next:(res=>{
      console.log(res)
      this.brandName = res.brand.brandName
      this.productCategory = res.productCategory.productCateName
      this.supplierName =res.supplier.supplierName
      this.productName = res.name
      this.imageProduct = res.image
      
      this.productID = res.productID
    this.product = res
    console.log(res.productID)
    return this.productID
    })
  })
 }
 ProductCommentForm: FormGroup = new FormGroup({
  productCommentName: new FormControl('', Validators.required),
  email: new FormControl('', Validators.required),
  detail: new FormControl('', Validators.required),
  customerId: new FormControl('08db3e1b-24a7-47ec-863e-e41576381803'),
  productId: new FormControl(''),
})
listProductCommnet: Array<TypeProductCommnent> = []
 addProductCommnet(){
  this.ProductCommentForm.controls['productId'].setValue(this.productID)
  console.log(this.ProductCommentForm.value)
  this.productComment.AddProductComment(this.ProductCommentForm.value).subscribe({
    next:(res=>{
      this.toast.success({summary:"Bình luận thành công",detail:"Thành công",duration:5000})
      this.getProductCommnent()
    }),
    error:(err=>{
      console.log(err.error.errors.Email[0])
    this.toast.error({summary:` ${err.error.errors.Email[0]}`,detail:"Thất bại",duration:5000})
    })
  })
 }
 capitalizeName!:string;
 countProductComment : number = 0;
 getProductCommnent(){
  console.log(this.slug)
  this.productComment.getAllProductComment(this.slug).subscribe(res=>{
    this.listProductCommnet = res.list;
    this.countProductComment = res.count
    this.listProductCommnet.map(item=>{
      this.capitalizeName = item.productCommentName.substring(0,1);
    })
  })
 }
 data : TypeAddOrder = {
   price : 0,
   quantity: 1,
   customerId: '08db3e1b-24a7-47ec-863e-e41576381803',
   productId: '',
   image:'',
   name:''
 };
 
  AddOrder(price:number){
 this.data.productId = this.productID
 this.data.quantity = this.quantity;
 this.data.price = price
 this.data.name = this.productName;
 this.data.image = this.imageProduct
 console.log(this.data)
  //   this.orderService.addOrder(this.data).subscribe({
  //     next:(res=>{
  //       this.toast.success({summary:"Thêm vào giỏ hàng thành công",detail:"Thành công",duration:5000})
  //       this.router.navigate(['gio-hang'])
  //     }),
  //     error:(err=>{
  //       this.toast.error({summary:` ${err.error.errors}`,detail:"Thất bại",duration:5000})
  //     })
  //   })
  // }

  this.router.navigate(['gio-hang'],{
    queryParams : 
      this.data
    
  })
  }
  
}
