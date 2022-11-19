import { FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { UntypedFormBuilder, UntypedFormControl, Validators } from "@angular/forms";
import Swal from "sweetalert2";
import { CrudServiciosService } from "src/app/servicios/crud-servicios.service";

interface Sede {
    id: string;
    nombre: string;
    direccion: string;
    ciudad: string;
}

@Component({
    selector: "app-mecanicos",
    templateUrl: "./mecanicos.component.html",
    styleUrls: ["./mecanicos.component.scss"]
})
export class MecanicosComponent implements OnInit {
    registrar: string = "";
    formMec: FormGroup = this.fb.group({
        nombres: ["", [Validators.required]],
        apellidos: [""],
        correo: [""],
        contraseina: [""],
        direccion: [""],
        cedula: [""],
        ciudadResidencia: [""],
        telefono: [""],
        rol: ["Mecanico"],
        nivelEstudios: [""],
        fechaNacimiento: [""],
        sedeId: [""]
    });

    sedes: Sede[] = [];
    errorMessage: string = "";

    ngOnInit(): void {
        const url = "http://localhost:3000/sedes/get-all";
        this.crudService.obtenerDatos(url).subscribe({
            next: data => {
                this.sedes = data;
                console.log(data);
            }
        });
    }

    constructor(private fb: UntypedFormBuilder, public crudService: CrudServiciosService) {}

    submitForm(): void {
        if (this.formMec.valid) {
            const urlUser = "http://[::1]:3000/jefe/crear/usuarios";

            this.crudService.postDatos(urlUser, this.formMec.value).subscribe({
                next: data => {
                    this.errorMessage = "";
                    Swal.fire({
                        icon: "success",
                        title: "Exito",
                        text: "El mecanico fue creado correctamente"
                    });
                    this.formMec.reset();
                },
                error: err => {
                    this.errorMessage = err.error.error.message;
                    console.log(err);
                }
            });
        } else {
            Object.values(this.formMec.controls).forEach(control => {
                if (control.invalid) {
                    control.markAsDirty();
                    control.updateValueAndValidity({ onlySelf: true });
                }
            });
        }
    }

    updateConfirmValidator(): void {
        Promise.resolve().then(() => this.formMec.controls["checkPassword"].updateValueAndValidity());
    }

    confirmationValidator = (control: UntypedFormControl): { [s: string]: boolean } => {
        if (!control.value) {
            return { required: true };
        } else if (control.value !== this.formMec.controls["password"].value) {
            return { confirm: true, error: true };
        }
        return {};
    };

    genderChange(value: string): void {
        this.formMec.get("sedeId")?.setValue(value);
    }
}
