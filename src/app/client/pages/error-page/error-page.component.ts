import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.startCountdown(10)
  }
  second: number = 10;
  redirect() {
    this.router.navigate(['/'])
  }
  startCountdown(seconds: number): any {
    let counter = seconds;

    const interval = setInterval(() => {

      counter--;
      this.second = counter
      if (this.second <= 0) {
        clearInterval(interval);
        this.redirect()
      }
    }, 1000);
  }
}
