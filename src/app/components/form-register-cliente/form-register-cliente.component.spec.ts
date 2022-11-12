import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegisterClienteComponent } from './form-register-cliente.component';

describe('FormRegisterClienteComponent', () => {
  let component: FormRegisterClienteComponent;
  let fixture: ComponentFixture<FormRegisterClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRegisterClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRegisterClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
