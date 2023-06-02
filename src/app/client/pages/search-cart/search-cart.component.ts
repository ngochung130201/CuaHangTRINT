import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-cart',
  templateUrl: './search-cart.component.html',
  styleUrls: ['./search-cart.component.scss']
})
export class SearchCartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isSearchCart : boolean = false
  searchCartForm = new FormGroup({
    phone: new FormControl()
  });
  hanldeSearchCart(){
    console.log(this.searchCartForm.get('phone')?.value)
    this.searchCartForm.get('phone')?.value != null ? this.isSearchCart = true : this.isSearchCart = false
  }

}
