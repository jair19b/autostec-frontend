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

registerLocaleData(es);

@NgModule({
    declarations: [AppComponent, FormRegisterClienteComponent, FormRegisterVehiculoComponent, HomeComponent, BusquedaDetalladaComponent],
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
        NzFormModule
    ],
    providers: [{ provide: NZ_I18N, useValue: es_ES }],
    bootstrap: [AppComponent]
})
export class AppModule {}
