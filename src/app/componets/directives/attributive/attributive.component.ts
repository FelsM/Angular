import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributive',
  templateUrl: './attributive.component.html',
  styleUrls: ['./attributive.component.css'],
})
export class AttributiveComponent implements OnInit {
  firstClass: string = 'active large';
  secondClass: string[] = ['active', 'italic'];
  thirdClass: { [key: string]: boolean } = {
    italic: true,
    large: true,
    active: false,
  };
  fourthClass: { [key: string]: boolean } = {
    'active italic': true,
    large: false,
    'active large': false,
  };

  flag: boolean = true;

  firstStyle: { [key: string]: string } = {
    'background-color': !this.flag ? 'yellow' : 'orange',
  };
  secondStyle: { [key: string]: string | number } = { 'font-size.px': 30 };
  thirdStyle: { [key: string]: string | number } = {
    'font-size.px': 50,
    'background-color': 'purple',
  };

  constructor() {}

  ngOnInit(): void {}
}
