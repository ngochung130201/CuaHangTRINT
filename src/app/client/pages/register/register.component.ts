import { Component, OnInit } from '@angular/core';
import { MyErrorStateMatcher } from '../login/login.component';
import { FormControl, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
import { TypeRegister } from '../../types/auth';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide = true;
  hidePassword: boolean = true;
  hideConfirmPassword: boolean = true;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
  firstNameFormControl = new FormControl('', [Validators.required]);
  lastNameFormControl = new FormControl('', [Validators.required]);
  confirmPasswordFormControl = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();
  constructor(private router: Router, private authService: AuthService, private toast: NgToastService) { }
  ngOnInit(): void {
  }


  handleRegister(): void {
    const email = this.emailFormControl.value;
    const password = this.passwordFormControl.value;
    const confirmPassword = this.confirmPasswordFormControl.value;
    const firstName = this.firstNameFormControl.value;
    const lastName = this.lastNameFormControl.value;

    const data: TypeRegister = {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      firstName: firstName,
      lastName: lastName,
    };

    this.authService.Register(data).subscribe({
      next: (res) => {
        if (res.succeeded) {
          this.toast.success({ summary: `${email} đã được đăng ký`, detail: 'Thành công', duration: 50000 });
          this.router.navigate(['/dang-nhap']);
        }
        console.log(res);
      },
      error: (err) => {
        console.log(err);
        this.toast.error({ summary: `${err.error.Message}`, detail: 'Thất bại', duration: 5000 });
      }
    });

  }
  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

  toggleConfirmPasswordVisibility(): void {
    this.hideConfirmPassword = !this.hideConfirmPassword;
  }

}
