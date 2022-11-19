import { Component, OnInit } from "@angular/core";
import { CrudServiciosService } from "src/app/servicios/crud-servicios.service";
import { FormBuilder } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import * as moment from "moment";
const Swal = require("sweetalert2");

interface Propietario {
    id: string;
    cedula: string;
    nombres: string;
    apellidos: string;
    telefono: string;
    fechaNacimiento: string;
    correo: string;
    contraseina: string;
    rol: string;
    nivelEstudios: string;
    direccion: string;
    ciudadResidencia: string;
    sedeId: string;
}

interface Vehiculo {
    id: string;
    placa: string;
    tipoVehiculo: string;
    marca: string;
    anio: string;
    modelo: string;
    capacidadPasajeros: string;
    cilindraje: string;
    paisOrigen: string;
    descripcion: string;
    usuarioId: string;
    usuario: Propietario;
}

@Component({
    selector: "app-revisiones-create",
    templateUrl: "./revisiones-create.component.html",
    styleUrls: ["./revisiones-create.component.scss", "../form-register-cliente/form-register-cliente.component.scss"]
})
export class RevisionesCreateComponent implements OnInit {
    vehiculos: Vehiculo[] = [];
    isVisible = false;
    errorMessage: string = "";
    revisionForm: FormGroup = this.fb.group({
        placa: [""],
        estadoRevision: ["pendiente"],
        estadoVehiculo: [""],
        fechaRevision: [""],
        horaEntrada: [""],
        horaSalida: [""],
        vehiculoId: [""],
        mecanicoId: [""]
    });

    constructor(public crudService: CrudServiciosService, public fb: FormBuilder) {}

    ngOnInit(): void {
        const url = "http://localhost:3000/vehiculos";
        const filtro: any = { where: { usuarioId: "63681c459908bc14bcf3a825" }, include: [{ relation: "usuario" }] };

        this.crudService.obetenerDatosFilter(url, filtro).subscribe({
            next: data => {
                this.vehiculos = data;
                console.log(data);
            }
        });
    }

    createRevision() {}

    editRevision() {}
    deleteRevision() {}

    showModal(event: any, vehiculo: Vehiculo): void {
        this.isVisible = true;
        this.revisionForm.controls["placa"].setValue(vehiculo.placa);
        this.revisionForm.controls["fechaRevision"].setValue(moment().format("YYYY-MM-DD"));
        this.revisionForm.controls["vehiculoId"].setValue(vehiculo.id);
        console.log(this.revisionForm.getRawValue());
    }

    handleOk(): void {
        const url = "http://localhost:3000/revisiones/crear";
        this.crudService.postDatos(url, this.revisionForm.getRawValue()).subscribe({
            next: data => {
                this.errorMessage = "";
                Swal.fire({
                    icon: "success",
                    title: "Exito",
                    text: "El cliente fue creado correctamente"
                });
                this.revisionForm.reset();
                this.isVisible = false;
            },
            error: err => {
                this.errorMessage = err.error.error.message;
            }
        });
    }

    handleCancel(): void {
        console.log("Button cancel clicked!");
        this.isVisible = false;
    }

    onValueChange(value: Date): void {
        // this.revisionForm.contains["fechaRevision"].setValue(moment(value).format("YYYY-MM-DD"));
    }

    onPanelChange(change: { date: Date; mode: string }): void {
        console.log(`Current value: ${change.date}`);
        console.log(`Current mode: ${change.mode}`);
    }
}
