import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShopState } from '@app/modules/shop/reducers';
import { map } from 'rxjs/operators';
import { FetchItemAction } from './actions/item.actions';

@Component({
  selector: 'app-shop-main',
  templateUrl: './shop-main.component.html',
  styleUrls: ['./shop-main.component.scss']
})
export class ShopMainComponent implements OnInit {

  get items$() {
    return this.store.select('shop', 'items')
      .pipe(map(items => {
        return Object.values(items || {});
      }));
  }

  constructor(private store: Store<ShopState>) { }

  ngOnInit() {
    this.store.dispatch(new FetchItemAction());
  }

  onAddItem(item: any) {
    console.log(item);
  }
}
