import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalExampleComponent } from './portal-example.component';

describe('PortalExampleComponent', () => {
  let component: PortalExampleComponent;
  let fixture: ComponentFixture<PortalExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
