import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComponentsComponent } from './view-components.component';

describe('ViewComponentsComponent', () => {
  let component: ViewComponentsComponent;
  let fixture: ComponentFixture<ViewComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
