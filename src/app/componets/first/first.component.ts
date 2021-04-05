import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  // 1 how to define input property
  inputs: ['data'],
})
export class FirstComponent {
  name: string = 'First Component';

  // 1 how to define input property
  data: any[];

  //2 how to define input property
  @Input() title: string = 'Alternative title';

  @Input('subtitle') secondtitle: string;

  private log(): void {
    console.log('private log');
  }
}
