import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";



@Component({
  selector: 'app-contra',
  templateUrl: './contra.page.html',
  styleUrls: ['./contra.page.scss'],
})
export class ContraPage implements OnInit {

  contrasenia : string;
  mensajeError : string = "";

  constructor(private router: Router) { }

  ngOnInit() {
    document.addEventListener("backbutton",function(e) {
      console.log("disable back button")
    }, false);
  }

  apagarAlarma(){
    let contraseña = JSON.parse(localStorage.getItem("contraseña"));
    if(contraseña == this.contrasenia){
      this.mensajeError = "";
      this.contrasenia = "";
      this.router.navigate(["/home"]);
    }else{
      this.mensajeError = "ERROR ¡Esta contraseña es incorrecta!";
    }
  }

}
