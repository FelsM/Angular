import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-child-a-details',
  templateUrl: './child-a-details.component.html',
  styleUrls: ['./child-a-details.component.css'],
})
export class ChildADetailsComponent implements OnInit {
  id: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // this.route.snapshot.paramMap.get('id')
    this.id = this.route.snapshot.params['id'];
  }

  backToGoods() {
    // this.router.navigate(['/routes', '/child-a']);
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
