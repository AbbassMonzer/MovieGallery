import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      FirstName: new FormControl(null,Validators.required),
      LastName: new FormControl(null,Validators.required),
      Email: new FormControl(null,Validators.required),
      PhoneNumber: new FormControl(null,Validators.required),
      Content: new FormControl(null,Validators.required),
    })
  }

  onSubmit(){
    console.log(this.contactForm.value);
    this.contactForm.reset();
  }

}
