import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormRegisterClienteComponent } from "./components/form-register-cliente/form-register-cliente.component";
import { HomeComponent } from "./components/home/home.component";
import { FormRegisterVehiculoComponent } from "./components/form-register-vehiculo/form-register-vehiculo.component";
import { BusquedaDetalladaComponent } from "./busqueda-detallada/busqueda-detallada.component";
<<<<<<< HEAD
import { FromRegisterRepuestoComponent } from "./components/from-register-repuesto/from-register-repuesto.component";
import { BusquedaRepuestosComponent } from "./busqueda-repuestos/busqueda-repuestos.component";
=======
>>>>>>> e195786e9a1aea5cd2b9c29d5f59881f0da4903e

const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        pathMatch: "full"
    },
    {
        path: "registrar-cliente",
        component: FormRegisterClienteComponent
    },
    {
        path: "registrar-vehiculo",
        component: FormRegisterVehiculoComponent
    },
    {
        path: "busqueda-detallada",
        component: BusquedaDetalladaComponent
    },
    {
<<<<<<< HEAD
      path: "registro-repuesto",
      component: FromRegisterRepuestoComponent
    },
    {
      path: "busquedaRepuesto",
      component: BusquedaRepuestosComponent
    },
    {
=======
>>>>>>> e195786e9a1aea5cd2b9c29d5f59881f0da4903e
        path: "**",
        component: HomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
