import { Component, OnInit } from '@angular/core';
import { MyErrorStateMatcher } from '../login/login.component';
import { FormControl, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from '../../services/auth.service';
import { TypeRegister } from '../../types/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router : Router,private authService :AuthService,private toast : NgToastService) { }
  hide = true;
  ngOnInit(): void {
  }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
  firstNameFormControl = new FormControl('', [Validators.required]);
  lastNameFormControl = new FormControl('', [Validators.required]);
  confirmPasswordFormControl = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();


HandleRegister(){
  const email = this.emailFormControl.value;
  const password = this.passwordFormControl.value;
  const confirmPassword = this.confirmPasswordFormControl.value;
  const firstName = this.firstNameFormControl.value;
  const lastName = this.lastNameFormControl.value;
  console.log(email,password)
  const data :TypeRegister= {
    email : email,
    password,
    confirmPassword,
    firstName,
    lastName,
  }
  this.authService.Register({firstName,lastName,email,password,confirmPassword}).subscribe({
    next:(res=>{
      if(res.succeeded){
        this.toast.success({summary:`${email} đã được đăng ký`,detail:"Thành công",duration:50000})
        this.router.navigate(['/dang-nhap'])
      }
      console.log(res)
    }),
    error:(err=>{
      console.log(err)
      this.toast.error({summary:`${err.error.Message}`,detail:`Thất bại`,duration:5000})
    })
  })
}
}
