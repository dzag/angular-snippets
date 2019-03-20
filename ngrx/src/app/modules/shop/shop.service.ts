import { Injectable } from '@angular/core';
import { asyncScheduler, Observable, of } from 'rxjs';
import { ShopItem } from './components/shop.models';

@Injectable({providedIn: 'root'})
export class ShopService {

  constructor() { }

  getItems(): Observable<ShopItem[]> {
    return of([
      { id: 1, name: 'Shoes', price: 50 },
      { id: 2, name: 'Car', price: 100 },
      { id: 3, name: 'Computer', price: 150 },
    ], asyncScheduler);
  }
}
