import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CrudServiciosService } from "./../../servicios/crud-servicios.service";
import Swal from "sweetalert2";

@Component({
    selector: "app-form-register-cliente",
    templateUrl: "./form-register-cliente.component.html",
    styleUrls: ["./form-register-cliente.component.scss"]
})
export class FormRegisterClienteComponent implements OnInit {
    formRegister: FormGroup = this.fb.group({
        nombres: ["", [Validators.required, Validators.pattern("hdjahs")]],
        apellidos: [""],
        correo: [""],
        contraseina: [""],
        direccion: [""],
        cedula: [""],
        ciudadResidencia: [""],
        telefono: [""],
        fechaNacimiento: [""],
        sedeId: [""]
    });

    sedes: any[] = [];
    errorMessage: string = "";

    constructor(public fb: FormBuilder, public crudService: CrudServiciosService) {}

    ngOnInit(): void {
        const url = "http://localhost:3000/sedes/get-all";
        this.crudService.obtenerDatos(url).subscribe({
            next: data => {
                this.sedes = data;
                console.log(data);
            }
        });
    }

    registrarUsuario() {
        const urlUser = "http://localhost:3000/clientes/crear";

        this.crudService.postDatos(urlUser, this.formRegister.value).subscribe({
            next: data => {
                this.errorMessage = "";
                Swal.fire({
                    icon: "success",
                    title: "Exito",
                    text: "El cliente fue creado correctamente"
                });
                this.formRegister.reset();
            },
            error: err => {
                this.errorMessage = err.error.error.message;
            }
        });
    }
}
