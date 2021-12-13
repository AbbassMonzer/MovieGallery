import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  constructor(private _apiService: ApiService) { }

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
    this._apiService.postData(this.contactForm.value).subscribe(() => {
    }, error => {
      console.log(error)
    })
    this.contactForm.reset();
  }

}
