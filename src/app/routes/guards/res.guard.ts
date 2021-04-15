import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Resolve,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ChildADetailsComponent } from '../child-a/child-a-details/child-a-details.component';
import { ChildAComponent } from '../child-a/child-a.component';

@Injectable({
  providedIn: 'root',
})
export class ResGuard implements Resolve<ChildADetailsComponent> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    console.log('Data from resolve guard');
    return { productInfo: 'Some good info. Very goog good.' };
  }
}
