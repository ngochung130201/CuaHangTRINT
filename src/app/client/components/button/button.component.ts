import { Component, Input, OnInit } from '@angular/core';
import { MyArrayTypeButton } from '../../pages/login/login.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  constructor() { }
  @Input() buttonText!: MyArrayTypeButton;
  @Input() isCheckPhone!: boolean;
  ngOnInit(): void {

  }
  OnClickPhone(key: number): boolean {
    if (key === 2) {
      this.isCheckPhone = !this.isCheckPhone;
      return this.isCheckPhone;
    }
    return false;

  }
}
