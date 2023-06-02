import { Component, OnInit } from '@angular/core';
import { addressFooter, footerBank, itemFooter } from './footer.data';
import { TypeFooter } from './typefooter';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  itemFooter = itemFooter;
  footerBank = footerBank;
  addressFooter = addressFooter
}
