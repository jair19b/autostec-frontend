import { BusquedaDetalladaComponent } from './busqueda-detallada/busqueda-detallada.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"busqueda-detallada", component: BusquedaDetalladaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
