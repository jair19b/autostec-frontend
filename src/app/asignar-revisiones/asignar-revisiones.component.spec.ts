import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarRevisionesComponent } from './asignar-revisiones.component';

describe('AsignarRevisionesComponent', () => {
  let component: AsignarRevisionesComponent;
  let fixture: ComponentFixture<AsignarRevisionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarRevisionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarRevisionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
