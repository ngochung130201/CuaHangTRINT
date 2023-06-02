import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CustomerService } from 'src/app/client/services/customer.service';
import { OrderService } from 'src/app/client/services/order.service';
type Checkout = {
  name:Array<any>,
  sumMoney:number
}
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private route : ActivatedRoute,private customerService : CustomerService,
    private toastService : NgToastService,
    private orderService :OrderService,
    private rouerNav :Router
    ) { }
 
  ngOnInit( ): void {
    this.getData()
    this.getCustomer()
  }
  FormCustomer = new FormGroup({
    fullName: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(0),
  });
  sumMoney : number = 0;
  productName:Array<any> = []
  name : string = ''
  productCheckout:Array<any> = []
  getData() {
    this.route.queryParams.subscribe({
      next:((res:any)=>{
            this.sumMoney = res.sumMoney
            this.productName = res.name
            const convertToObject = JSON.parse(res.data)
          this.productCheckout = convertToObject
           this.name = this.productName.join(",")
      })
    });
  }
  id!:string 
  getCustomer(){
    const email = localStorage.getItem("tokenUser")
    const convertString = email?.toString()
    this.customerService.getCustomer(convertString).subscribe({
      next:(res=>{
        this.FormCustomer = new FormGroup({
          fullName: new FormControl(res.fullName),
          address: new FormControl(res.address),
          email: new FormControl(res.email),
          phone: new FormControl(res.phone)
        });
        this.id = res.customerId
        console.log(res)
      }),
      error:(err=>{
        console.log(err)
      })
    })
  }
  onUpdateCustomer(){

    this.customerService.updateCustomer(this.id,this.FormCustomer.value).subscribe({
      next:(res=>{
        this.toastService.success({summary:`${res.Message}`,detail:"Thành công",duration:5000})
        console.log(res)
      }),
      error:(err=>{
        console.log(err)
      })
    })
  }
  HanldeOrder(){
    this.orderService.addOrder(this.id,this.productCheckout).subscribe({
      next:(res=>{
        localStorage.removeItem("order")
        this.toastService.success({summary:"Đặt hàng thành công",detail:"Thành công",duration:5000})
        this.rouerNav.navigate(['/'])
      }),
      error:(err=>{
        console.log(err)
      })
    })
  }
}
