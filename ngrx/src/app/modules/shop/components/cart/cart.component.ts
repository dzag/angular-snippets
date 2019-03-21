import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShopState } from '@app/modules/shop/reducers';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  total$: Observable<number> = this.store.select(
    'shop', 'cart', 'total'
  );

  cartItems$: Observable<any> = this.store.select(
    'shop', 'cart', 'items'
  );

  items$ = this.store.select('shop', 'items');

  get subTotal$() {
    return combineLatest(
      this.items$,
      this.cartItems$,
    ).pipe(
      map(([items, cartItems]) => {
        return cartItems.reduce((prev, current) => {
          return (current.count * items[current.id].price) + prev;
        }, 0);
      })
    );
  }

  constructor(private store: Store<ShopState>) { }

  ngOnInit() {
  }

}
