import { Component, OnInit } from '@angular/core';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthService } from '../../services/auth.service';
import { TypeLogin } from '../../types/auth';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';
export type MyArrayTypeButton = Array<
  {
    text: string, icon: IconDefinition
    , color: string
  }>;

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = form && form.submitted;
      return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
  }
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  faFacebookF = faFacebookF;
  faGoogle = faGoogle;
  constructor(private authService :AuthService,private toast : NgToastService,private router : Router) { }
  isCheckPhone: boolean = false;
  buttonText: MyArrayTypeButton = [
    {
      text: 'Tiếp tục với Google',
      icon: faGoogle,
      color: "bg-[#dc4e42]"
    },
    {
      text: 'Tiếp tục với Facebook',
      icon: faFacebookF,
      color: "bg-[#2d88ff]"
    },
    {
      text: 'Tiếp tục với số điện thoại',
      icon: faPhone,
      color: "bg-white"
    },


  ];
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
  
  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {

  }
  hide = true;
HandleLogin(){
  const email = this.emailFormControl.value;
  const password = this.passwordFormControl.value;
  console.log(email,password)
  const data :TypeLogin= {
    email : email,
    password,
  }
 
  this.authService.Login({email,password}).subscribe({
    next:((res :any)=>{
      this.authService.hanldeLogin(res.token,true)
      console.log(res)
      localStorage.setItem("tokenUser",res.user)
      this.toast.success({summary:`Đăng nhập thành công`,detail:`Thành công`,duration:5000})
      this.router.navigate(['/'],{
        queryParams : {
          user:res.user
        }
      })
      
    }),
    error:(err=>{
      console.log(err.error.Message)
      this.toast.error({summary:`${err.error.Message}`,detail:`Thất bại`,duration:5000})
    })
  })
}
}
