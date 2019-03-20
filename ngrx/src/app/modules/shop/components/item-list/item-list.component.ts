import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../shop.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  items: any[] = [];

  constructor(private shopService: ShopService,
              private store: Store<any>,
  ) { }

  ngOnInit() {
    this.shopService.getItems().subscribe(items => {
      this.items = items;
    });
  }

  add(item: any) {
    console.log(item);
  }
}
