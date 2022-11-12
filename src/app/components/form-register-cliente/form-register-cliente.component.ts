import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

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
        fechaNacimiento: [""]
    });

    formVehiculo: FormGroup = this.fb.group({});

    constructor(public fb: FormBuilder) {}

    ngOnInit(): void {}
}
