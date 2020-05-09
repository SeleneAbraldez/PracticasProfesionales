import { Component, OnInit } from '@angular/core';
// import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';


@Component({
  selector: 'app-animals',
  templateUrl: './animals.page.html',
  styleUrls: ['./animals.page.scss'],
})
export class AnimalsPage implements OnInit {

  animales = [
    {
      nombre: "vaca",
      imagen: "../../../assets/img/animales/vaca.png",
      sonidoE: "../../../assets/sonidos/animales/español/Vaca.m4a",
      sonidoI: "../../../assets/sonidos/animales/ingles/Cow.m4a",
      sonidoP: "../../../assets/sonidos/animales/porugues/Vvvaca.m4a",

    },
    {
      nombre: "cerdo",
      imagen: "../../../assets/img/animales/cerdos.jpg",
      sonidoE: "../../../assets/sonidos/animales/español/Cerdo.m4a",
      sonidoI: "../../../assets/sonidos/animales/ingles/Pork.m4a",
      sonidoP: "../../../assets/sonidos/animales/porugues/Porco.m4a",
    },
    {
      nombre: "lobo",
      imagen: "../../../assets/img/animales/lobo.png",
      sonidoE: "../../../assets/sonidos/animales/español/Lobo.m4a",
      sonidoI: "../../../assets/sonidos/animales/ingles/Wolf.m4a",
      sonidoP: "../../../assets/sonidos/animales/porugues/Lubu.m4a",
    },
    {
      nombre: "oveja",
      imagen: "../../../assets/img/animales/oveja.png",
      sonidoE: "../../../assets/sonidos/animales/español/Oveja.m4a",
      sonidoI: "../../../assets/sonidos/animales/ingles/Sheep.m4a",
      sonidoP: "../../../assets/sonidos/animales/porugues/Ovhela.m4a",
    },
  ]

  idioma: string;
  bandera: string;

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

  reproducirSonido(animal) {
    let sonido = new Audio();
    switch (this.idioma) {
      case "español":
        sonido.src = animal.sonidoE;
        break;
      case "portugues":
        sonido.src = animal.sonidoP;
        break;
      case "ingles":
        sonido.src = animal.sonidoI;
        break;
      default:
        break;
    }
    sonido.play();
  }

  cambiarIdioma1() {
    this.idioma = "portugues";
    this.bandera = "../../../assets/img/fab/brasil.png";
    localStorage.setItem("idioma", JSON.stringify(this.idioma));
  }

  cambiarIdioma2() {
    this.idioma = "español";
    this.bandera = "../../../assets/img/fab/argentina.png";
    localStorage.setItem("idioma", JSON.stringify(this.idioma));
  }

  cambiarIdioma3() {
    this.idioma = "ingles";
    this.bandera = "../../../assets/img/fab/ingles-png.png";
    localStorage.setItem("idioma", JSON.stringify(this.idioma));
  }

}
