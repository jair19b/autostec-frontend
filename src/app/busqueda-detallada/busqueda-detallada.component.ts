import { CrudServiciosService } from "./../servicios/crud-servicios.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

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
}

@Component({
    selector: "app-busqueda-detallada",
    templateUrl: "./busqueda-detallada.component.html",
    styleUrls: ["./busqueda-detallada.component.scss"]
})
export class BusquedaDetalladaComponent implements OnInit {
    expandSet = new Set<number>();
    busquedaGroup: FormGroup = this.fb.group({
        busqueda: [""]
    });
    public listOfData: Vehiculo[] = [];
    constructor(public fb: FormBuilder, private busquedaD: CrudServiciosService) {}

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

    busquedaDetallada() {
        const url = "http://[::1]:3000/vehiculos";
        this.busquedaD.obtenerDatos(url, this.busquedaGroup.value.busqueda, "placa").subscribe({
            next: datos => {
                this.listOfData = datos;
            }
        });
        //console.log(this.busquedaGroup.value.busqueda)
    }
}
