import { Component } from '@angular/core';
import { CdkDragMove } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  width = '320px';
  height = '100%';

  constructor() {}

  dragMove(element: HTMLSpanElement, $event: CdkDragMove<any>) {
    console.log('dragMove', $event);
  }

}
