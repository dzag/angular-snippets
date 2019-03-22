import { Component, ElementRef, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import {
  FlexibleConnectedPositionStrategy,
  HorizontalConnectionPos,
  Overlay,
  OverlayConfig,
  VerticalConnectionPos
} from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-overlay-example',
  templateUrl: './overlay-example.component.html',
  styleUrls: ['./overlay-example.component.scss']
})
export class OverlayExampleComponent implements OnInit {

  @ViewChild('buttonEl', { read: ElementRef }) buttonEl: ElementRef;
  @ViewChild('menuTemplate', { read: TemplateRef }) menuTemplate: TemplateRef<any>;

  constructor(private overlay: Overlay,
              private viewContainerRef: ViewContainerRef,
  ) { }

  ngOnInit() {
  }

  get overlayConfigs() {

    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(this.buttonEl);

    this._setPosition(positionStrategy);

    return new OverlayConfig({
      positionStrategy,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      hasBackdrop: true,
    });
  }

  open() {
    const overlayRef = this.overlay.create(this.overlayConfigs);
    const portal = new TemplatePortal(this.menuTemplate, this.viewContainerRef);
    overlayRef.attach(portal);
  }

  private _setPosition(positionStrategy: FlexibleConnectedPositionStrategy) {
    let [originX, originFallbackX]: HorizontalConnectionPos[] =['end', 'start'];

    let [overlayY, overlayFallbackY]: VerticalConnectionPos[] = ['bottom', 'top'];

    let [overlayX, overlayFallbackX] = [originX, originFallbackX];
    let [originY, originFallbackY] = [overlayY, overlayFallbackY];
    let offsetY = 0;

    positionStrategy.withPositions([
      {originX, originY, overlayX, overlayY, offsetY},
      {originX: originFallbackX, originY, overlayX: overlayFallbackX, overlayY, offsetY},
      {
        originX,
        originY: originFallbackY,
        overlayX,
        overlayY: overlayFallbackY,
        offsetY: -offsetY
      },
      {
        originX: originFallbackX,
        originY: originFallbackY,
        overlayX: overlayFallbackX,
        overlayY: overlayFallbackY,
        offsetY: -offsetY
      }
    ]);
  }
}
