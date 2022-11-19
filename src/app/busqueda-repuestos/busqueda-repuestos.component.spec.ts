import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaRepuestosComponent } from './busqueda-repuestos.component';

describe('BusquedaRepuestosComponent', () => {
  let component: BusquedaRepuestosComponent;
  let fixture: ComponentFixture<BusquedaRepuestosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaRepuestosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusquedaRepuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
