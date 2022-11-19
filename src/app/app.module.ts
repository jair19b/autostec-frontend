import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NzFormModule } from "ng-zorro-antd/form";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NZ_I18N } from "ng-zorro-antd/i18n";
import { es_ES } from "ng-zorro-antd/i18n";
import { registerLocaleData } from "@angular/common";
import es from "@angular/common/locales/es";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "./layout/layout.module";
import { FormRegisterClienteComponent } from "./components/form-register-cliente/form-register-cliente.component";
import { FormRegisterVehiculoComponent } from "./components/form-register-vehiculo/form-register-vehiculo.component";
import { HomeComponent } from "./components/home/home.component";
import { BusquedaDetalladaComponent } from "./busqueda-detallada/busqueda-detallada.component";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzTableModule } from "ng-zorro-antd/table";
import { RevisionesCreateComponent } from "./components/revisiones-create/revisiones-create.component";
import { NzModalModule } from "ng-zorro-antd/modal";
import { NzCalendarModule } from "ng-zorro-antd/calendar";
import { AsignarRevisionesComponent } from "./asignar-revisiones/asignar-revisiones.component";
import { FromRegisterRepuestoComponent } from "./components/from-register-repuesto/from-register-repuesto.component";
import { BusquedaRepuestosComponent } from "./busqueda-repuestos/busqueda-repuestos.component";
import { MecanicosComponent } from "./components/mecanicos/mecanicos.component";
import { NzSelectModule } from "ng-zorro-antd/select";
import { BusquedaVAsignadosComponent } from "./busqueda-v-asignados/busqueda-v-asignados.component";

registerLocaleData(es);

@NgModule({
    declarations: [
        AppComponent,
        FormRegisterClienteComponent,
        FormRegisterVehiculoComponent,
        HomeComponent,
        BusquedaDetalladaComponent,
        AsignarRevisionesComponent,
        RevisionesCreateComponent,
        FromRegisterRepuestoComponent,
        BusquedaRepuestosComponent,
        MecanicosComponent,
        BusquedaVAsignadosComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        LayoutModule,
        ReactiveFormsModule,
        NzInputModule,
        NzTableModule,
        NzFormModule,
        NzModalModule,
        NzCalendarModule,
        NzSelectModule
    ],
    providers: [{ provide: NZ_I18N, useValue: es_ES }],
    bootstrap: [AppComponent]
})
export class AppModule {}
