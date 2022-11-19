import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CrudServiciosService } from "./../../servicios/crud-servicios.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-from-register-repuesto',
  templateUrl: './from-register-repuesto.component.html',
  styleUrls: ['./from-register-repuesto.component.scss']
})
export class FromRegisterRepuestoComponent implements OnInit {
  formRepuesto: FormGroup = this.fb.group({
    tipo: [""],
    referencia: [""],
    cantidad: [""],
    vehiculosId: [""]
});

listvehiculos: any[] = [];
errorMessage: string = "";

constructor(public fb: FormBuilder, public crudService: CrudServiciosService) {}

ngOnInit(): void {
  const url = "http://localhost:3000/vehiculos";
  this.crudService.obtenerDatos(url).subscribe({
      next: data => {
          this.listvehiculos = data;
      }
  });
}
registrarRepuesto() {
  const urlUser = "http://localhost:3000/repuestos";

  this.crudService.postDatos(urlUser, this.formRepuesto.value).subscribe({
      next: data => {
          this.errorMessage = "";
          Swal.fire({
              icon: "success",
              title: "Exito",
              text: "El repuesto fue agregado correcatmente"
          });
          this.formRepuesto.reset();
      },
      error: err => {
          this.errorMessage = err.error.error.message;
      }
  });
}

}
