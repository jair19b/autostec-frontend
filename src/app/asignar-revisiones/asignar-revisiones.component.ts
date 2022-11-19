import { Component, OnInit } from "@angular/core";
import { CrudServiciosService } from "./../servicios/crud-servicios.service";
import { NzTableLayout, NzTablePaginationPosition, NzTablePaginationType, NzTableSize } from "ng-zorro-antd/table";
import { filter } from "rxjs";
import { AuthService } from "src/app/servicios/auth.service";

interface Revision {
    placa: string;
    horaEntrada: string;
    fechaRevision: string;
    estadoRevision: string;
    id: string;
}

@Component({
    selector: "app-asignar-revisiones",
    templateUrl: "./asignar-revisiones.component.html",
    styleUrls: ["./asignar-revisiones.component.scss"]
})
export class AsignarRevisionesComponent implements OnInit {
    constructor(public CrudServiciosService: CrudServiciosService, public auth: AuthService) {}

    editCache: { [key: string]: { edit: boolean; data: Revision } } = {};
    i = 0;
    public listOfData: Revision[] = [];

    ngOnInit(): void {
        this.mostrarRevisiones();
    }

    aceptarRevision(event: any, revision: Revision) {
        const url = "http://[::1]:3000/revisiones/" + revision.id;
        this.CrudServiciosService.modificarDatosFilter(
            url,
            { estadoRevision: "aceptada", mecanicoId: this.auth.usuario.data.id },
            {}
        ).subscribe({
            next: data => {
                const copiaLista = JSON.parse(JSON.stringify(this.listOfData));
                for (let i in copiaLista) {
                    if (copiaLista[i].id == revision.id) {
                        copiaLista[i].estadoRevision = "aceptada";
                    }
                }
                this.listOfData = copiaLista;
            }
        });
    }
    rechazarRevision(event: any, revision: Revision) {
        const url = "http://[::1]:3000/revisiones/" + revision.id;
        this.CrudServiciosService.modificarDatosFilter(
            url,
            { estadoRevision: "rechazada", mecanicoId: this.auth.usuario.data.id },
            {}
        ).subscribe({
            next: data => {
                const copiaLista = JSON.parse(JSON.stringify(this.listOfData));
                for (let i in copiaLista) {
                    if (copiaLista[i].id == revision.id) {
                        copiaLista[i].estadoRevision = "rechazada";
                    }
                }
                this.listOfData = copiaLista;
            }
        });
    }
    reagendarStart(placa: string): void {
        this.editCache[placa].edit = true;
    }

    borrarRevision(placa: string): void {
        this.listOfData = this.listOfData;
    }

    reagendarSave(placa: string): void {
        const index = this.listOfData.findIndex(item => item.placa === placa);
        Object.assign(this.listOfData[index], this.editCache[placa].data);
        this.editCache[placa].edit = false;
    }

    updateEditCache(): void {
        this.listOfData.forEach(item => {
            this.editCache[item.placa] = {
                edit: false,
                data: { ...item }
            };
        });
    }

    mostrarRevisiones() {
        const url = "http://[::1]:3000/revisiones";
        const filtro = { where: { estadoRevision: "pendiente" } };
        this.CrudServiciosService.obetenerDatosFilter(url, filtro).subscribe({
            next: datos => {
                this.listOfData = datos;
            }
        });
    }
}
