import { Injectable } from '@angular/core';
import { asyncScheduler, Observable, of } from 'rxjs';
import { Item } from './item';

@Injectable({providedIn: 'root'})
export class ShopService {

  constructor() { }

  getItems(): Observable<Item[]> {
    return of([
      { id: 1, name: 'Shoes', price: 50 },
      { id: 2, name: 'Car', price: 100 },
      { id: 3, name: 'Computer', price: 150 },
    ], asyncScheduler);
  }
}
