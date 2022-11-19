import { CrudServiciosService } from "./../servicios/crud-servicios.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

interface repuesto {
  id: string;
  tipo: string;
  referencia: string;
  cantidad: string;
  vehiculosId: string;
  vehiculos: {
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
    usuarioId: string
  }

}

@Component({
  selector: 'app-busqueda-repuestos',
  templateUrl: './busqueda-repuestos.component.html',
  styleUrls: ['./busqueda-repuestos.component.scss']
})
export class BusquedaRepuestosComponent implements OnInit {
  expandSet = new Set<number>();
    busquedaGroupR: FormGroup = this.fb.group({
        busqueda: [""]
    });
    public listOfData: repuesto[] = [];
    constructor(public fb: FormBuilder, private busquedaR: CrudServiciosService) {}



    ngOnInit(): void {}
    onExpandChange(id: string, checked: boolean): void {
        if (checked) {
            this.expandSet.add(parseInt(id));
        } else {
            this.expandSet.delete(parseInt(id));
        }
    }
    convertirNumeros(vehiculoId: any) {
      return parseInt(vehiculoId);
  }

    busquedaRepuesto() {
      let url = "http://[::1]:3000/repuestos";
      let filtro: any = {
        include:[{relation:"vehiculos"}]
      }
      const parametros=this.busquedaGroupR.get("busqueda")?.value;
      if (parametros.length>=2){
        filtro.where={tipo:{like:parametros,options:"i"}}
      }


      this.busquedaR.obetenerDatosFilter(url,filtro).subscribe({
          next: datos => {
              this.listOfData = datos;
              console.log(datos)
          }
      });

  }

}
