import { Component, OnInit } from '@angular/core';
import {
  combineLatest,
  forkJoin,
  fromEvent,
  interval,
  Observable,
  of,
} from 'rxjs';
import { map, mergeMap, pairwise, take, timeout } from 'rxjs/operators';

@Component({
  selector: 'app-obs',
  templateUrl: './obs.component.html',
  styleUrls: ['./obs.component.css'],
})
export class ObsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // Observable
    // this.rxjsFunc();
  }

  private rxjsFunc() {
    const obsevable$ = new Observable((subscriber) => {
      subscriber.next(1);
      setTimeout(() => {
        subscriber.error(2);
      }, 1000);
      subscriber.next(3);
    });

    obsevable$.subscribe(
      (val) => {
        console.log(val);
      },
      (err) => {
        console.error(err);
      }
    );

    //Observer
    /*
    const observer = {
      next: ()=>{},
      error: ()=>{},
      complete: ()=>{},
    }
    // 1
    obsevable$.subscribe(
      ()=>{},
      ()=>{},
      ()=>{}
    )
    // 2
    obsevable$.subscribe(
      observer
    ) */
    // operators
    of(1, 5, 2)
      .pipe(
        mergeMap((val) => {
          return of(val);
        })
        // pairwise()
      )
      .subscribe((pairs) => {
        console.log(pairs);
      });

    combineLatest([of(1, 2, 3), of(4, 5, 6)]).subscribe((values) => {
      console.log(values);
    });

    interval(1000)
      .pipe(take(5), timeout(2000))
      .subscribe((val) => {
        console.log(val);
      });

    forkJoin([of(1, 2, 3, 123), of(12, 31, 123)]).subscribe((arr) => {
      console.log(arr);
    });

    // convert event to observable
    const clicks = fromEvent(document, 'click');
    clicks.subscribe((evData) => {
      console.log(evData);
    });
  }
}
