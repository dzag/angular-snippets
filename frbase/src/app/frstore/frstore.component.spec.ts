import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrstoreComponent } from './frstore.component';

describe('FrstoreComponent', () => {
  let component: FrstoreComponent;
  let fixture: ComponentFixture<FrstoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrstoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
