import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.css'],
})
export class LifecycleChildComponent implements OnInit {
  @Input() data: any;

  constructor() {}

  // Angular LifeCycle Hooks

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log('ngOnChanges - child');
  }

  ngOnInit(): void {
    console.log('ngOnInit - child');
  }

  ngDoCheck() {
    console.log('ngDoCheck - child');
  }

  ngAfterContentInit() {
    console.log('ngAfterConterInit - child');
  }

  ngAfterContentChecked() {
    console.log('ngAfterConterCheck - child');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit - child');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewCheck - child');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy - child');
  }
}
