import { Component, OnInit } from '@angular/core';

interface FormData {
  email: string;
  password: string;
  adress: string;
  adress2: string;
  city: string;
  zip: number;
  check: boolean;
}

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css'],
})
export class TemplateDrivenComponent implements OnInit {
  name: string = '';

  data: FormData = {
    email: '',
    password: '',
    adress: '',
    adress2: '',
    city: '',
    zip: 0,
    check: false,
  };

  constructor() {}

  ngOnInit(): void {}
  emailChange(checkoutForm: any) {
    console.log(checkoutForm);
  }
}
