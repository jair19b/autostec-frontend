import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import Swal from 'sweetalert2'
import { CrudServiciosService } from 'src/app/servicios/crud-servicios.service';


@Component({
  selector: 'app-mecanicos',
  templateUrl: './mecanicos.component.html',
  styleUrls: ['./mecanicos.component.scss']
})
export class MecanicosComponent implements OnInit {
  registrar: string = '';
  formMec: FormGroup = this.fb.group({
    nombres: ['', [Validators.required, Validators.pattern("hdjahs")]],
    apellidos: [''],
    correo: [''],
    contraseina: [''],
    direccion: [''],
    cedula: [''],
    ciudadResidencia: [''],
    telefono: [''],
    rol: [''],
    nivelEstudios: [''],
    fechaNacimiento: [new Date()],
    sedeId: [''],
  })

  sedes: any[] = [];
  errorMessage: string = "";
  validateForm!: UntypedFormGroup;
  captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone'
  };

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  
  updateConfirmValidator(): void {
    Promise.resolve().then(() => this.validateForm.controls['checkPassword'].updateValueAndValidity());
  }

  confirmationValidator = (control: UntypedFormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  constructor(
    private fb: UntypedFormBuilder, public crudService: CrudServiciosService) {
    this.registrar = '';
  }

  ngOnInit(): void {
  }
      registerMec(): void{
      const datosMec = this.formMec.getRawValue();
      console.log(datosMec);

      const url = "http://localhost:3000/sedes/get-all";
      this.crudService.obtenerDatos(url).subscribe({
          next: data => {
              this.sedes = data;
              console.log(data);
          }
      });
    }

    registrarUsuario() {
      const urlUser = "http://[::1]:3000/jefe/crear/usuarios";

      this.crudService.postDatos(urlUser, this.formMec.value).subscribe({
          next: data => {
              this.errorMessage = "";
              Swal.fire({
                  icon: "success",
                  title: "Exito",
                  text: "El cliente fue creado correctamente"
              });
              this.formMec.reset();
          },
          error: err => {
              this.errorMessage = err.error.error.message;
          }
      });
  }

  }

