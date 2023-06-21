import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OrderClientService } from '../../services/OrderClient/order-client.service';
import { OrderService } from '../../services/order.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-search-cart',
  templateUrl: './search-cart.component.html',
  styleUrls: ['./search-cart.component.scss']
})
export class SearchCartComponent implements OnInit {
  currentStepIndex: number = 0;
  orderStatus: number = 0;
  constructor(private orderService: OrderService, private toast: NgToastService) { }

  ngOnInit(): void {
  }
  isSearchCart: boolean = false
  searchCartForm = new FormGroup({
    phone: new FormControl()
  });
  hanldeSearchCart() {
    this.orderService.getHistoryOrder(this.searchCartForm.get('phone')?.value).subscribe({
      next: (res) => {
        console.log(res)
        this.isSearchCart = true
        switch (res.orderStatus) {
          case 1:
            this.currentStepIndex = 0; // Chọn "mat-step" đầu tiên
            break;
          case 2:
            this.currentStepIndex = 1; // Chọn "mat-step" thứ hai
            break;
          case 3:
            this.currentStepIndex = 2; // Chọn "mat-step" thứ ba
            break;
          default:
            this.currentStepIndex = -1; // Không chọn bất kỳ "mat-step" nào
            break;
        }
      },
      error: (err) => {
        this.toast.error({ detail: "Lỗi", summary: err.error.message, duration: 3000 })
        this.isSearchCart = false
      },

    })

  }

}
