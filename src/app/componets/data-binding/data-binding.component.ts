import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {
  title: string = 'Data binding';
  imgUrl: string = 'http://google.com';
  isUserActive: boolean = true;

  classObj: { [key: string]: boolean } = {
    btn: true,
    'btn-large': true,
    'btn-success': true,
  };

  classArr = ['btn', 'btn-large'];
  styleObj = {
    width: '100px',
    height: '100px',
    border: '20px pink solid',
  };

  constructor() {}

  ngOnInit(): void {}
}
