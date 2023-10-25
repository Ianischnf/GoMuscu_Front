import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExComponent } from './add-ex.component';

describe('AddExComponent', () => {
  let component: AddExComponent;
  let fixture: ComponentFixture<AddExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
