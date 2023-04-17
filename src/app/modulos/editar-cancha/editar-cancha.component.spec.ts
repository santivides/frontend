import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCanchaComponent } from './editar-cancha.component';

describe('EditarCanchaComponent', () => {
  let component: EditarCanchaComponent;
  let fixture: ComponentFixture<EditarCanchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCanchaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarCanchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
