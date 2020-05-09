import { Component, OnInit } from '@angular/core';
// import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.page.html',
  styleUrls: ['./colores.page.scss'],
})
export class ColoresPage implements OnInit {
  colores = [
    {
      nombre: "amarillo",
      imagen: "../../../assets/img/colores/amarillo.JPG",
      sonidoE: "../../../assets/sonidos/colores/español/Amarillo.m4a",
      sonidoI: "../../../assets/sonidos/colores/ingles/Yellow.m4a",
      sonidoP: "../../../assets/sonidos/colores/portu/Amarelo.m4a",

    },
    {
      nombre: "azul",
      imagen: "../../../assets/img/colores/azul.JPG",
      sonidoE: "../../../assets/sonidos/colores/español/Azul.m4a",
      sonidoI: "../../../assets/sonidos/colores/ingles/Blue.m4a",
      sonidoP: "../../../assets/sonidos/colores/portu/Azu.m4a",
    },
    {
      nombre: "rojo",
      imagen: "../../../assets/img/colores/rojo.JPG",
      sonidoE: "../../../assets/sonidos/colores/español/Rojo.m4a",
      sonidoI: "../../../assets/sonidos/colores/ingles/Red.m4a",
      sonidoP: "../../../assets/sonidos/colores/portu/Verme.m4a",
    },
    {
      nombre: "verde",
      imagen: "../../../assets/img/colores/verde.JPG",
      sonidoE: "../../../assets/sonidos/colores/español/Verde.m4a",
      sonidoI: "../../../assets/sonidos/colores/ingles/Green.m4a",
      sonidoP: "../../../assets/sonidos/colores/portu/Verdi.m4a",
    },
  ]

  idioma: string; 
  bandera : string;

  constructor(
    // private screenOrientation: ScreenOrientation
    ) {
    this.recuperarDatos();
   }

  ngOnInit() {
    // this.screenOrientation.unlock();
  }

  recuperarDatos() {
    this.idioma = JSON.parse(localStorage.getItem("idioma"));
    switch (this.idioma) {
      case "ingles":
        this.bandera = "../../../assets/img/fab/ingles-png.png";
        break;
      case "portugues":
        this.bandera = "../../../assets/img/fab/brasil.png";
        break;
      case "español":
        this.bandera = "../../../assets/img/fab/argentina.png";
        break;
      default:
        break;
    }
  }

  reproducirSonido(color) {
    let sonido = new Audio();
    switch (this.idioma) {
      case "español":
        sonido.src = color.sonidoE;
        break;
      case "portugues":
        sonido.src = color.sonidoP;
        break;
      case "ingles":
        sonido.src = color.sonidoI;
        break;
      default:
        break;
    }
    sonido.play();
  }

  cambiarIdioma1(){
    this.idioma = "portugues";
    this.bandera = "../../../assets/img/fab/brasil.png";
    localStorage.setItem("idioma", JSON.stringify(this.idioma));
  }
  
  cambiarIdioma2(){
    this.idioma = "español";
    this.bandera = "../../../assets/img/fab/argentina.png";
    localStorage.setItem("idioma", JSON.stringify(this.idioma));
  }
  
  cambiarIdioma3(){
    this.idioma = "ingles";
    this.bandera = "../../../assets/img/fab/ingles-png.png";
    localStorage.setItem("idioma", JSON.stringify(this.idioma));
  }

}
