import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesMiembrosComponent } from './detalles-miembros.component';

describe('DetallesMiembrosComponent', () => {
  let component: DetallesMiembrosComponent;
  let fixture: ComponentFixture<DetallesMiembrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesMiembrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesMiembrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
