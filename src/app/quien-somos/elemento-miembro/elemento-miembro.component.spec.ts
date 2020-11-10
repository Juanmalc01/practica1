import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementoMiembroComponent } from './elemento-miembro.component';

describe('ElementoMiembroComponent', () => {
  let component: ElementoMiembroComponent;
  let fixture: ComponentFixture<ElementoMiembroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementoMiembroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementoMiembroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
