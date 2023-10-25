import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteExComponent } from './delete-ex.component';

describe('DeleteExComponent', () => {
  let component: DeleteExComponent;
  let fixture: ComponentFixture<DeleteExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteExComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
