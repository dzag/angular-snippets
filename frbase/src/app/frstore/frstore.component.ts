import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-frstore',
  templateUrl: './frstore.component.html',
  styleUrls: ['./frstore.component.scss']
})
export class FrstoreComponent implements OnInit {

  items: any;

  constructor(private fireStore: AngularFirestore) { }

  ngOnInit() {
    this.fireStore.collection('items', ref =>
      ref.where('price', '<', 1000))
      .get().subscribe(items => {
      this.items = items.docs.map(o => ({
        ...o.data(),
        id: o.id,
      }));
      console.log(this.items);
    });
  }

}
