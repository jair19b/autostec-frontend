import { Component, OnInit } from "@angular/core";
import { CrudServiciosService } from "./../servicios/crud-servicios.service";
import { FormBuilder, FormGroup } from "@angular/forms";

interface Asignacion {
    id: string;
    placa: string;
    estadoRevision: string;
    estadoVehiculo: string;
    fechaRevision: string;
    horaEntrada: string;
    horaSalida: string;
    vehiculoId: string;
    mecanicoId: string;

    usuario: {
        id: string;
        cedula: string;
        nombres: string;
        apellidos: string;
        telefono: string;
        fechaNacimiento: string;
        correo: string;
    };
}

@Component({
    selector: "app-busqueda-v-asignados",
    templateUrl: "./busqueda-v-asignados.component.html",
    styleUrls: ["./busqueda-v-asignados.component.scss"]
})
export class BusquedaVAsignadosComponent implements OnInit {
    expandSet = new Set<number>();
    busquedaGroupA: FormGroup = this.fb.group({
        busqueda: [""]
    });
    public listOfData: Asignacion[] = [];
    constructor(public fb: FormBuilder, private busquedaA: CrudServiciosService) {}

    ngOnInit(): void {}
    onExpandChange(id: string, checked: boolean): void {
        if (checked) {
            this.expandSet.add(parseInt(id));
        } else {
            this.expandSet.delete(parseInt(id));
        }
    }

    convertirNumeros(placa: any) {
        return parseInt(placa);
    }

    busquedaDetalladaA() {
        let url = "http://[::1]:3000/revisiones";
        let filtro: any = {
            include: [{ relation: "vehiculo" }]
        };
        const parametros = this.busquedaGroupA.get("busqueda")?.value;
        if (parametros.length >= 2) {
            filtro.where = { placa: { like: parametros, options: "i" } };
        }

        this.busquedaA.obetenerDatosFilter(url, filtro).subscribe({
            next: datos => {
                this.listOfData = datos;
                console.log(datos);
            }
        });
    }
}
