import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { CrudServiciosService } from 'src/app/servicios/crud-servicios.service';
import { Md5 } from 'ts-md5';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup = new FormGroup({});
 

  constructor(
    private fb: FormBuilder,
    private crudserviciosService: CrudServiciosService,
    private auth: AuthService,
    private router: Router) {
    this.userForm = this.fb.group({
      correo: [''],
      contraseina: ['']
    })
  }

  ngOnInit(): void { }

  login() {
    const credenciales = this.userForm.getRawValue();
    credenciales["contrasenia"] = Md5.hashStr(credenciales["contraseina"]);
    console.log(credenciales);
    this.crudserviciosService
      .posData("http://localhost:3000/login", credenciales)
      .subscribe({
        next: (data) => {
          if(data && data.token){
            this.auth.token = data.token;
            this.auth.usuario=data;
            
            sessionStorage.setItem('token', data.token);
            delete data["token"]
            sessionStorage.setItem('usuario', JSON.stringify(data));
            this.router.navigate(['/inicio']);
            return data;
          }
      },
      error: err => {
        return false;
          
      },
        });
  }
}
