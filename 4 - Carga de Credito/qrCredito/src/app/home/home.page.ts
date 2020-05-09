import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  cuenta: string;
  saldo: number = 0;
  estado: number;
  mensaje: string = "";
  diez: boolean = false;
  diezAdmin: boolean = false;
  cincuenta: boolean = false;
  cincuentaAdmin: boolean = false;
  cien: boolean = false;
  cienAdmin: boolean = false;

  constructor(
    private router: Router,
    private barcodeScanner: BarcodeScanner
  ) {
    this.obtenerLocalStorage();
  }

  ngOnInit() {
    this.obtenerLocalStorage();
  }

  ionViewDidLoad() {
    this.obtenerLocalStorage();
  }

  obtenerLocalStorage() {
    this.cuenta = JSON.parse(localStorage.getItem("cuenta"));
    if (this.cuenta == null) {
      this.router.navigate(["/login"]);
    }
    this.saldo = JSON.parse(localStorage.getItem("saldo"));
    if (this.saldo == null) {
      this.saldo = 0;
    }
    this.estado = JSON.parse(localStorage.getItem("estado"));
    // alert(this.estado);
    // switch (this.estado) {
    //   case 0:
    //     this.mensaje = "¡Ya ha realizado todas sus cargas disponibles!";
    //     break;
    //   case 1:
    //     this.mensaje = "¡Le queda una carga a realizar!";
    //     break;
    //   case 2:
    //     this.mensaje = "¡Como admin, le quedan dos cargas a realizar!";
    //     break;
    //   default:
    //     break;
    // }
  }

  escanearQR() {
    // this.saldo += 20;
    // this.estado--;
    // switch (this.estado) {
    //   case 0:
    //     this.mensaje = "¡Ya ha realizado todas sus cargas disponibles!";
    //     break;
    //   case 1:
    //     this.mensaje = "¡Le queda una carga a realizar!";
    //     break;
    //   case 2:
    //     this.mensaje = "¡Como admin, le quedan dos cargas a realizar!";
    //     break;
    //   default:
    //     break;
    // }
    this.barcodeScanner.scan().then(barcodeData => {
      // alert('Barcode data' + JSON.stringify(barcodeData.text));
      //10
      if (barcodeData.text === "8c95def646b6127282ed50454b73240300dccabc") {
        if (this.diez == false) {
          this.saldo += 10;
          if (this.cuenta == "admin@admin.com") {
            this.mensaje = "¡Ha cargado de forma exitosa sus $10! Como administrador, usted puede utilizarlo una vez mas.";
          } else {
            this.mensaje = "¡Ha cargado de forma exitosa sus $10!";
          }
          this.diez = true;
        } else if (this.diez == true && this.cuenta == "admin@admin.com" && this.diezAdmin == false) {
          this.saldo += 10;
          this.mensaje = "¡Ha cargado de forma exitosa sus $10!";
          this.diezAdmin = true;
        } else {
          this.mensaje = "¡No se ha realizado la carga porque ya ha utilizado su codigo de $10!";
        }
        //50
      } else if (barcodeData.text === "ae338e4e0cbb4e4bcffaf9ce5b409feb8edd5172 ") {
        if (this.cincuenta == false) {
          this.saldo += 50;
          if (this.cuenta == "admin@admin.com") {
            this.mensaje = "¡Ha cargado de forma exitosa sus $50! Como administrador, usted puede utilizarlo una vez mas.";
          } else {
            this.mensaje = "¡Ha cargado de forma exitosa sus $50!";
          }
          this.cincuenta = true;
        } else if (this.cincuenta == true && this.cuenta == "admin@admin.com" && this.cincuentaAdmin == false) {
          this.saldo += 50;
          this.mensaje = "¡Ha cargado de forma exitosa sus $50!";
          this.cincuentaAdmin = true;
        } else {
          this.mensaje = "¡No se ha realizado la carga porque ya ha utilizado su codigo de $50!";
        }
        //100
      } else if (barcodeData.text === "2786f4877b9091dcad7f35751bfcf5d5ea712b2f") {
        if (this.cien == false) {
          this.saldo += 100;
          if (this.cuenta == "admin@admin.com") {
            this.mensaje = "¡Ha cargado de forma exitosa sus $100! Como administrador, usted puede utilizarlo una vez mas.";
          } else {
            this.mensaje = "¡Ha cargado de forma exitosa sus $100!";
          }
          this.cien = true;
        } else if (this.cien == true && this.cuenta == "admin@admin.com" && this.cienAdmin == false) {
          this.saldo += 100;
          this.mensaje = "¡Ha cargado de forma exitosa sus $100!";
          this.cienAdmin = true;
        } else {
          this.mensaje = "¡No se ha realizado la carga porque ya ha utilizado su codigo de $100!";
        }
        //Invalido
      } else {
        this.mensaje = "¡Error, este QR no es un QR valido!";
      }
    }).catch(err => {
      alert('Error' + err);
    })
  }

  limpiarCreditos() {
    this.saldo = 0;
    localStorage.setItem("saldo", JSON.stringify(this.saldo));
    // if (this.cuenta == "admin@admin.com") {
    //   this.estado = 2;
    //   this.mensaje = "¡Como admin, le quedan dos cargas a realizar!";
    // } else {
    //   this.estado = 1;
    //   this.mensaje = "¡Le queda una carga a realizar!";
    // }
    localStorage.setItem("estado", JSON.stringify(this.estado));
    this.diez = false;
    this.diezAdmin = false;
    this.cincuenta = false;
    this.cincuentaAdmin = false;
    this.cien = false;
    this.cienAdmin = false;
    this.mensaje = "";
  }

  cerrarSesion() {
    this.cuenta = null;
    localStorage.setItem("cuenta", JSON.stringify(this.cuenta));
    this.saldo = null;
    localStorage.setItem("saldo", JSON.stringify(this.saldo));
    this.estado = null;
    localStorage.setItem("estado", JSON.stringify(this.estado));
    this.diez = false;
    this.diezAdmin = false;
    this.cincuenta = false;
    this.cincuentaAdmin = false;
    this.cien = false;
    this.cienAdmin = false;
    this.mensaje = "";
    this.router.navigateByUrl("/login");
  }

}
