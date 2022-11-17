import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegisterVehiculoComponent } from './form-register-vehiculo.component';

describe('FormRegisterVehiculoComponent', () => {
  let component: FormRegisterVehiculoComponent;
  let fixture: ComponentFixture<FormRegisterVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRegisterVehiculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRegisterVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
