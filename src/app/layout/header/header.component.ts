import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/servicios/auth.service";
import { Router } from "@angular/router";

@Component({
    selector: "layout-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
    usuario: any = null;

    constructor(public auth: AuthService, private router: Router) {
        let token = localStorage.getItem("token");
        let usuario = localStorage.getItem("usuario");

        if (token) {
            this.auth.token = token;
        } else {
            this.router.navigate(["/login"]);
        }

        if (usuario) {
            this.auth.usuario = JSON.parse(usuario);
            this.usuario = this.auth.usuario.data;
        }
    }

    ngOnInit(): void {}

    capitalizarPrimeraLetra(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    // cerrarSesion(): void {
    //     localStorage.clear();
    //     this.router.navigate(["login"]);
    //     this.auth.token = "";
    //     this.auth.usuario = null;
    // }
}
