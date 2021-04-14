import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.css'],
})
export class ChildAComponent implements OnInit {
  goods: any[] = [
    { id: '1', name: 'Phone', price: 200 },
    { id: '2', name: 'PC', price: 1000 },
    { id: '3', name: 'TV', price: 700 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
