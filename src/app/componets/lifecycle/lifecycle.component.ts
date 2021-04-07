import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css'],
})
export class LifecycleComponent implements OnInit {
  inputData: any = { name: 'Edward', sname: 'Lifecycle' };

  constructor() {}

  // Angular LifeCycle Hooks
  // 1 - if input properties
  ngOnChanges() {
    console.log('ngOnChanges');
  }

  //1 or 2
  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterConterInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterConterCheck');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewCheck');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  changeData() {
    this.inputData = Object.assign({}, this.inputData, {
      name: 'Jack',
      sname: 'Black',
    });
  }
}
