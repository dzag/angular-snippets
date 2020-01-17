import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-apple-list',
  templateUrl: './apple-list.component.html',
  styleUrls: ['./apple-list.component.scss']
})
export class AppleListComponent implements OnInit {

  @ViewChild(RouterOutlet, { static: true })
  outlet: RouterOutlet;

  name = 'AppleList';

  constructor() { }

  ngOnInit() {
  }

}
