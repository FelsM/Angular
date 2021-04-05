import { QueryList, ViewChildren } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FirstComponent } from '../first/first.component';
import { RepeatComponent } from '../repeat/repeat.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @ViewChild(FirstComponent) firstComponent: FirstComponent;
  @ViewChildren(RepeatComponent) repeatComponents: QueryList<RepeatComponent>;

  title: string = 'My firt angular app';
  collection: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  objCollection: any[] = [
    { name: 'John', sname: 'Doe' },
    { name: 'Jack', sname: 'Black' },
  ];

  doSomething(): void {
    alert('Hello');
  }
  reutrnSomething(): string {
    return 'smth';
  }

  childInputChanged(eventData: string) {
    alert(`Message from child cmponent: ${eventData}`);
    console.log(this.firstComponent.name);
    this.repeatComponents.forEach((comp) => {
      console.log(comp);
    });
  }
}
