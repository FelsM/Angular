import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css'],
})
export class ModelDrivenComponent implements OnInit {
  checkoutForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  get customData() {
    return this.checkoutForm.get('customData') as FormArray;
  }
  addCustomField() {
    this.customData.push(this.fb.control(''));
    console.log(this.checkoutForm.value);
  }

  ngOnInit(): void {
    this.createFormGroupV2();
    this.disableRelatedField();
    const data = this.getServerData();
    data.customData.forEach((element) => {
      (this.checkoutForm.get('customData') as FormArray).push(
        this.fb.control('')
      );
    });

    this.checkoutForm.patchValue(data);
    // this.checkoutForm.reset();
  }

  createFormGroupV1() {
    this.checkoutForm = new FormGroup({
      email: new FormControl('test@mail.com'),
      password: new FormControl(''),
      adress: new FormControl(''),
      adressGroup: new FormGroup({
        adress2: new FormControl(''),
        city: new FormControl(''),
        zip: new FormControl(''),
      }),
      check: new FormControl(''),
    });
  }
  createFormGroupV2() {
    this.checkoutForm = this.fb.group({
      email: ['test@mail.com', [Validators.email, Validators.required]],
      password: ['', Validators.required],
      adress: [''],
      adressGroup: this.fb.group({
        adress2: [],
        city: [],
        zip: [],
      }),
      customData: this.fb.array([]),
      check: [false],
    });
  }

  getServerData(): any {
    const serverData = {
      email: 'jach@mail.com',
      pasword: 'qwerty',
      adress: 'New York',
      adressGroup: {
        adress2: 'Manhattan',
        zip: 1234,
      },
      customData: ['asdas', 'data2', 3333],
      check: true,
    };
    return serverData;
  }

  private disableRelatedField() {
    if (this.checkoutForm.controls.email.value) {
      this.checkoutForm.controls.adress.enable();
    } else {
      this.checkoutForm.controls.adress.disable();
    }
  }
}
