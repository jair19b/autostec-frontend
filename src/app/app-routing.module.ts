import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormRegisterClienteComponent } from "./components/form-register-cliente/form-register-cliente.component";
import { HomeComponent } from "./components/home/home.component";
import { FormRegisterVehiculoComponent } from "./components/form-register-vehiculo/form-register-vehiculo.component";
import { BusquedaDetalladaComponent } from "./busqueda-detallada/busqueda-detallada.component";
import { RevisionesCreateComponent } from "./components/revisiones-create/revisiones-create.component";
import { AsignarRevisionesComponent } from "./asignar-revisiones/asignar-revisiones.component";

const routes: Routes = [
    {
        path: "login",
        loadChildren: () => import("./modules/login/login.module").then(m => m.LoginModule)
    },
    {
        path: "inicio",
        component: HomeComponent
    },
    {
        path: "asignar-revisiones",
        component: AsignarRevisionesComponent
    },
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
        path: "revisiones/crear",
        component: RevisionesCreateComponent
    },
    {
        path: "**",
        component: HomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
