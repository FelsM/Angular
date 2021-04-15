import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isAutthorized(option: string): boolean {
    if (option === 'yes') {
      return true;
    } else {
      return false;
    }
  }
}
