import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CrudServiciosService } from "./../../servicios/crud-servicios.service";
import Swal from "sweetalert2";

@Component({
    selector: "app-form-register-vehiculo",
    templateUrl: "./form-register-vehiculo.component.html",
    styleUrls: ["../form-register-cliente/form-register-cliente.component.scss"]
})
export class FormRegisterVehiculoComponent implements OnInit {
    formVehiculo: FormGroup = this.fb.group({
        placa: [""],
        tipoVehiculo: [""],
        marca: [""],
        anio: [""],
        modelo: [""],
        capacidadPasajeros: [""],
        cilindraje: [""],
        paisOrigen: [""],
        descripcion: [""],
        usuarioId: [""]
    });

    listClientes: any[] = [];
    errorMessage: string = "";

    constructor(public fb: FormBuilder, public crudService: CrudServiciosService) {}

    ngOnInit(): void {
        const url = "http://localhost:3000/clientes";
        this.crudService.obtenerDatos(url).subscribe({
            next: data => {
                this.listClientes = data;
            }
        });
    }

    registrarVehiculo() {
        const urlUser = "http://localhost:3000/vehiculos/registrar";

        this.crudService.postDatos(urlUser, this.formVehiculo.value).subscribe({
            next: data => {
                this.errorMessage = "";
                Swal.fire({
                    icon: "success",
                    title: "Exito",
                    text: "El vehiculo fue agreagdo correcatmente"
                });
                console.log("antes de reset ", this.formVehiculo);
                this.formVehiculo.reset();
                console.log(this.formVehiculo);
            },
            error: err => {
                this.errorMessage = err.error.error.message;
            }
        });
    }
}
