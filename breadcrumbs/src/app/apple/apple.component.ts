import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.scss'],
})
export class AppleComponent implements OnInit {

  name = 'AppleComponent';

  constructor() { }

  ngOnInit() {
  }

}
