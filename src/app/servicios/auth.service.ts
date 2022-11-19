import { Injectable } from '@angular/core';
import { CrudServiciosService } from './crud-servicios.service';

interface Credenciales{
  correo: string,
  contraseina: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuario: any;
  token: string="";

 
  constructor() { }

 

}
