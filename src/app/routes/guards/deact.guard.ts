import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanDeactivate,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ChildBComponent } from '../child-b/child-b.component';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class DeactGuard implements CanDeactivate<ChildBComponent> {
  constructor(private authService: AuthService) {}

  canDeactivate(
    component: ChildBComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.authService.isAutthorized('asdasdas')) {
      const answer = confirm('continue');
      return answer;
    } else {
      return true;
    }
  }
}
