import { Component, OnInit, SimpleChanges } from '@angular/core';
import {
  faBookmark,
  faChevronRight,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { TyCart } from './Typecart.type';
import { priceVND } from '../../helper/price';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { TypeAddOrder } from '../../types/order';
import { CommomService } from '../../services/commom.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  data: Array<any> = [];
  constructor(private route: ActivatedRoute,private commomService:CommomService,private routerNav:Router ) {
  
  }
  isChangeSum :boolean = false
  ngOnInit(): void {
    this.callPrice();
    this.getData()
    this.getLocalStorage()
    this.CheckCart()
    
    // console.log(this.data)
// this.hanldeIntoMoney(this.isChangeSum)
   this.intoMoney2 = this.sumProduct()
  }
  blurEvent(event: any){
    const quantity = event.target.value;
    // console.log(quantity)

  }
  ngOnChanges(changes: SimpleChanges) {
    this.checkCheckBoxvalue(this.isChecked);
    this.callPrice();
  }
  callPrice() {
    this.sumMoney = this.sumProduct()
      .toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
      .toString();
  }
  sumPrice : number = 0;
  checkCartEmpty :boolean= false;
  getData() {
    this.route.queryParams.subscribe(res => {
    //  console.log(res)
    //   const converObject = JSON.stringify(res);
   
    this.commomService.addIdToList(JSON.stringify(res))
    //let result = this.data.push(res)
      
   
      // Do something with the data
    });
  }
  quantity : number = 0
  dataLocalStorage :Array<any> = [];
  getLocalStorage(){
    const listOrder  = this.commomService.getIdList();
  
    listOrder.map(item=>{
     if(item == "{}"){
      this.intoMoney2 = 0
      this.data = []
     
     }
     else {
      const data = JSON.parse(item)
    this.dataLocalStorage.push(item)
    const hanldeSum =  this.hanldeSum(data)

    // console.log(hanldeSum)
     this.data.push(hanldeSum)
     }
    })
    
  }
CheckCart(){
  if(Object.keys(this.data).length == 0){
    this.checkCartEmpty = true
  }

}
  hanldeSum(data:TypeAddOrder) {
   const sumPrice = data.price * data.quantity
    const objectAddSumPrice = {...data,sumPrice}
    return objectAddSumPrice;
  
  }
  intoMoney2 : number = 0 ; // thanh tien
  hanldeIntoMoney(isChangeSum:boolean){
    this.data.map(item=>{
      this.intoMoney2+=item.sumPrice 
    })
   
   if(isChangeSum){
    console.log(this.data)
    this.routerNav.navigate(['gio-hang'])
   }
   
  }
  removeItem(productId:any){
    
   this.dataLocalStorage.map(item=>{
       const convertObject = JSON.parse(item)
       console.log(convertObject.productId)
       if(convertObject.productId === productId){
           this.commomService.removeIdFromList((item))
    
        this.getLocalStorage()
   

        this.hanldeIntoMoney(!this.isChangeSum)
        this.CheckCart()
        this.routerNav.navigate(['gio-hang'])
       }
    //   this.commomService.removeIdFromList((item))
    //  this.routerNav.navigate(['gio-hang'])
    //  this.getLocalStorage()
    
   })
  

  }
 
  hanldeCheckOut(){
   const data =   this.data.map(data=>{
      return {
        productId : data.productId,
        quantity : data.quantity,
        price:data.price
      }
    })
    const dataCheckout = {
      sumMoney : this.intoMoney2 ,
      data :JSON.stringify(data),
      name:this.data.map(x=>x.name)
    }
    console.log(dataCheckout)
   this.routerNav.navigate(['thanh-toan'],{
    queryParams:dataCheckout
   })
  }
  isChecked: boolean = true;
  isDisable: boolean = false;

  bookMarkIcon: IconDefinition = faBookmark;
  nextIcon: IconDefinition = faChevronRight;
  sumMoney: string | number = '0';
  intoMoney: number | string = 0;
  // kiem tra checked
  checkCheckBoxvalue(event: any): boolean {
    console.log(this.isChecked);
    console.log(event.target.checked);
    console.log(this.sumProduct());
    return (this.isChecked = event.target.checked);
  }
  // Hàm tăng số lượng
  
  //  Hàm tính tổng tiền
  sumProduct() {
    let sum = 0;
    this.data.map((item) => {
      sum += item.sumPrice;
    });
  
    return sum;
  }
  //  hàm giảm số lượng
  

  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }
}
