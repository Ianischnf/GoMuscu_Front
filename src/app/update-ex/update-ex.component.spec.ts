import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExComponent } from './update-ex.component';

describe('UpdateExComponent', () => {
  let component: UpdateExComponent;
  let fixture: ComponentFixture<UpdateExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateExComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
