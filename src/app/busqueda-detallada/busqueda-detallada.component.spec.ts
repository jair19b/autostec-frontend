import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BusquedaDetalladaComponent } from './busqueda-detallada.component';

describe('BusquedaDetalladaComponent', () => {
  let component: BusquedaDetalladaComponent;
  let fixture: ComponentFixture<BusquedaDetalladaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaDetalladaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusquedaDetalladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
