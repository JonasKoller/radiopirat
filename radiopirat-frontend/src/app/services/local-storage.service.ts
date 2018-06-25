import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public set(key: string, value: any): void {
    if (value !== undefined) {
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
