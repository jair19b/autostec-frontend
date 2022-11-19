import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromRegisterRepuestoComponent } from './from-register-repuesto.component';

describe('FromRegisterRepuestoComponent', () => {
  let component: FromRegisterRepuestoComponent;
  let fixture: ComponentFixture<FromRegisterRepuestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromRegisterRepuestoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromRegisterRepuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
