import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AutentiService } from "src/app/servicios/autenti.service";
import { Usuarix } from "../../clases/usuarix";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuarix: Usuarix = new Usuarix();
  mensajeError: string = "";

  aceptar: boolean = false;
  ingresar: boolean = false;
  spinner: boolean = false;

  constructor(private router: Router, private authSvc: AutentiService) { }

  ngOnInit() {
  }

  async onLogin() {
    const usuar = await this.authSvc.onLogin(this.usuarix);
    if (usuar) {
      this.mensajeError = "";
      this.spinner = true;
      setTimeout(() => {
        this.spinner = false;
        console.log("Se ha ingresado correctamente!");
        this.router.navigateByUrl("/home");
      }, 3000)
    } else {
      this.mensajeError = "¡Los datos ingresados son incorrectos!";
    }
  }

  selecCuenta(cuenta) {
    switch (cuenta) {
      case "admin@admin.com": {
        this.usuarix.contrasenia = "111111";
        this.usuarix.correo = "admin@admin.com";
        break;
      }
      case "invitado@invitado.com": {
        this.usuarix.contrasenia = "222222";
        this.usuarix.correo = "invitado@invitado.com";
        break;
      }
      case "usuario@usuario.com": {
        this.usuarix.contrasenia = "333333";
        this.usuarix.correo = "usuario@usuario.com";
        break;
      }
      case "anonimo@anonimo.com": {
        this.usuarix.contrasenia = "444444";
        this.usuarix.correo = "anonimo@anonimo.com";
        break;
      }
      case "tester@tester.com": {
        this.usuarix.contrasenia = "555555";
        this.usuarix.correo = "tester@tester.com";
        break;
      }
      default: {
        break;
      }
    }
    localStorage.setItem("contraseña", JSON.stringify(this.usuarix.contrasenia));
    this.onLogin();
  }

}
