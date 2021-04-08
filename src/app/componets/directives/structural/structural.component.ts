import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css'],
})
export class StructuralComponent implements OnInit {
  ngForArr = [2432141, 12312, 353, 123123, 52, 12312, 345345, 12312];
  mode: string = '1';
  isUserLoggedIn: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
