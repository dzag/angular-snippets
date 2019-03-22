import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentPortal, Portal, TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-portal-example',
  templateUrl: './portal-example.component.html',
  styleUrls: ['./portal-example.component.scss']
})
export class PortalExampleComponent implements AfterViewInit {

  @ViewChild('templatePortalContent') templatePortalContent: TemplateRef<any>;
  selectedPortal: Portal<any>;
  componentPortal: ComponentPortal<ComponentPortalExample>;
  templatePortal: TemplatePortal<any>;

  constructor(private _viewContainerRef: ViewContainerRef) {}

  ngAfterViewInit() {
    this.componentPortal = new ComponentPortal(ComponentPortalExample);
    this.templatePortal = new TemplatePortal(this.templatePortalContent, this._viewContainerRef);
  }
}

@Component({
  selector: 'component-portal-example',
  template: 'Hello, this is a component portal'
})
export class ComponentPortalExample {}
