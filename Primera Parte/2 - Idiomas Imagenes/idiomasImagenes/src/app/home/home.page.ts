import { Component } from '@angular/core';
import { Router } from "@angular/router";
// import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  idioma: string;
  cosas: string;

  constructor(
    private router: Router,
    // private screenOrientation: ScreenOrientation
  ) {
    // this.screenOrientation.unlock();
  }

  guardarCosas(cosas) {
    this.cosas = cosas;
    if (this.cosas != null && this.idioma != null) {
      this.guardarDatos();
    }
  }

  guardarIdioma(idioma) {
    this.idioma = idioma;
    if (this.cosas != null && this.idioma != null) {
      this.guardarDatos();
    }
  }

  guardarDatos() {
    this.idioma;
    localStorage.setItem("idioma", JSON.stringify(this.idioma));
    this.cosas;
    localStorage.setItem("cosas", JSON.stringify(this.cosas));
    switch (this.cosas) {
      case "animales":
        this.router.navigateByUrl("/animals");
        break;
      case "colores":
        this.router.navigateByUrl("/colores");
        break;
      case "numeros":
        this.router.navigateByUrl("/numeros");
        break;
      default:
        break;
    }
  }

}
