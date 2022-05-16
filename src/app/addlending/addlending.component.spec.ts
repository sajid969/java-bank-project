import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlendingComponent } from './addlending.component';

describe('AddlendingComponent', () => {
  let component: AddlendingComponent;
  let fixture: ComponentFixture<AddlendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddlendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
