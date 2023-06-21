import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../service/contact.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  myForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder, private contactService: ContactService, private toast: NgToastService) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      body: '',
      name: '',
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^\\+?[1-9]{10,}$')]],
      address: '',
      subject: ''
    });
  }
  onSubmit() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      console.log('Form data', formData);
      this.contactService.addContact(formData).subscribe(
        response => {
          // Handle the response from the API
          this.toast.success({ detail: "Thành công", summary: "Gửi liên hệ thành công", duration: 3000 })
          // Reset the form after successful submission
          this.myForm.reset();
        },
        error => {
          // Handle the error
          this.toast.error({ detail: "Thất bại", summary: "Gửi liên hệ thất bại", duration: 3000 })
          console.error('API error:', error.message);

          console.error('API error:', error);
        }
      );
    }
  }
}
