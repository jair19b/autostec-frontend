import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaVAsignadosComponent } from './busqueda-v-asignados.component';

describe('BusquedaVAsignadosComponent', () => {
  let component: BusquedaVAsignadosComponent;
  let fixture: ComponentFixture<BusquedaVAsignadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaVAsignadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusquedaVAsignadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
