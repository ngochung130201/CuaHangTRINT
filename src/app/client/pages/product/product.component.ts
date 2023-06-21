import { Component, OnInit } from '@angular/core';

import { faAngleUp, faTruckFast, IconDefinition } from '@fortawesome/free-solid-svg-icons';


import { ProductClientService } from '../../services/productClient/product-client.service';
import { PageEvent } from '@angular/material/paginator';
import { TypeProducts } from '../../types/product';
import { FormControl, FormGroup } from '@angular/forms';
export type tySort = {
  name: string,
  value: string,
  typeSort: string
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductClientService) { }
  upIcon: IconDefinition = faAngleUp;
  freeShip = faTruckFast;
  ngOnInit(): void {
    var resutl = this.getProductALL(1, 3, "price", "asc")
    //  console.log(resutl)
    console.log(this.totalRecord)
    this.ProductFormSeach.valueChanges.subscribe({
      next: ((s: any) => {
        const s_split = s.sorts.split("_")
        const sort = s_split[0]
        const typeSort = s_split[1]

        console.log(this.currentPageNumber)
        this.getProductALL(this.currentPageNumber, this.pageSize, sort, typeSort, "name", s.search!)



      })
    })
    this.listSort.map(item => {
      console.log(item.name)
    })
    //this.hanldeDataProduct(true)

  }
  handleViewCount(slug: string) {
    this.productService.UpdateViewCount(slug).subscribe({
      next: (res => {
        console.log(res)
      })
    })
  }
  listSort: tySort[] = [
    {
      name: "Giá giảm dần",
      value: "price",
      typeSort: "desc"
    },
    {
      name: "Giá tăng dần",
      value: "price",
      typeSort: "asc"
    },
    {
      name: "Lượt xem",
      value: "viewCount",
      typeSort: "desc"
    }
  ];
  dafaultOption: string = "Giá tăng dần"

  ProductFormSeach: FormGroup = new FormGroup({
    search: new FormControl(''),
    sorts: new FormControl(''),

  });

  sort!: string;
  tySort!: string;

  products: Array<TypeProducts> = [];
  totalRecord!: number;
  totalPages!: number;
  currentPageNumber!: number;
  hasNextPage!: boolean;
  pageSize!: number;
  isData = true;
  getProductALL(currentPageNumber?: number, pageSize?: number, sort?: string, typeSort?: string, where?: string, search: string = '') {
    this.productService.getAllProduct(currentPageNumber, pageSize, sort, typeSort, search, where).subscribe(products => {
      this.products = products.data;
      console.log(products)
      if (products.data.length == 0) {
        this.isData = false
      }
      else {
        this.isData = true
      }
      this.pageSize = products.pageSize
      this.totalRecord = products.totalRecords
      this.totalPages = products.totalPages
      this.currentPageNumber = products.currentPageNumber
      this.hasNextPage = products.hasNextPage
      return products;
    })

  }
  OnHandlePaging(currentPageNumber: number, pageSize: number) {
    this.getProductALL(currentPageNumber, pageSize, "price", "asc")
  }
  counter(i: number) {
    return new Array(i);
  }
  OnActionPaging(action: boolean, currentPageNumber: number, pageSize: number) {
    if (action) {
      const currentPageNumberNext = ++currentPageNumber;

      if (currentPageNumberNext > this.totalPages) {
        console.log("het")
      }
      else {
        this.OnHandlePaging(currentPageNumberNext, pageSize)
      }


    }
    else {
      const currentPageNumberPreviuos = --currentPageNumber;
      this.OnHandlePaging(currentPageNumberPreviuos, pageSize)
    }
  }




  // list pageSize 
  listPageSize: Array<number> = [2, 4, 5]
  length = 50;
  pageIndex = 0;
  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent!: PageEvent;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.pageSize = e.pageSize;
    this.OnHandlePaging(1, this.pageSize)

  }



}
