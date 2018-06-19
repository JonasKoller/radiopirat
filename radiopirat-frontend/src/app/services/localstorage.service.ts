import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  public set(key: string, value: any): void {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  public get(key: string): any {

    let result = localStorage.getItem(key);
    if (result) {
      return JSON.parse(result);
    }

    return undefined;
  }
}
