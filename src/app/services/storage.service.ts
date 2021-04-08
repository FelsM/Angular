import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  name: string = 'Strorage Serivice';
  private storageKey = 'data';
  constructor() {}

  read(): any {
    return JSON.parse(localStorage.getItem(this.storageKey));
  }

  readByKey(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  update(data) {
    const currentData = this.read();
    const newData = [...currentData, ...data];
    localStorage.setItem(this.storageKey, JSON.stringify(newData));
  }

  updateByKey(key: string, data: any) {
    const currentData = this.read();
    const newData = [...currentData, ...data];
    localStorage.setItem(this.storageKey, JSON.stringify(newData));
  }

  create(data) {
    if (!this.read()) {
      localStorage.setItem(this.storageKey, JSON.stringify(data));
    }
  }

  createByKey(key: string, data: any) {
    if (!this.readByKey(key)) {
      localStorage.setItem(key, JSON.stringify(data));
    }
  }

  delete() {
    localStorage.removeItem(this.storageKey);
  }

  deleteByKey(key: string) {
    localStorage.removeItem(key);
  }
}
