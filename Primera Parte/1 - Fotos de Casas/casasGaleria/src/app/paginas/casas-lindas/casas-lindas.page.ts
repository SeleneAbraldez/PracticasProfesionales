import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions, DestinationType, EncodingType, PictureSourceType } from '@ionic-native/camera/ngx';
import { AngularFireStorage } from "@angular/fire/storage";
import * as firebase from 'firebase';
import { StorageService } from 'src/app/servicios/storage.service';
import { Usuarix } from 'src/app/clases/usuarix';


@Component({
  selector: 'app-casas-lindas',
  templateUrl: './casas-lindas.page.html',
  styleUrls: ['./casas-lindas.page.scss'],
})
export class CasasLindasPage implements OnInit {

  fotos = [];
  mostrarUnicaImagen: boolean = false;
  mostrarGrid: boolean = false;
  linkFoto: string;
  spinner: boolean = false;
  listaVoto = [];
  cantVotos: any = 0;
  errorMensaje : string = "";

  constructor(
    private camera: Camera,
    private fire: AngularFireStorage,
    private databases: StorageService,
  ) { }

  ngOnInit() {
    this.traerFoto();
  }

  async sacarFoto(tipo) {
    this.mostrarGrid = false;
    //definir las opciones de la camara
    const opciones: CameraOptions = {
      quality: 50,
      targetHeight: 600,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
    }
    this.camera.getPicture(opciones).then((ImageData) => {
      var base64Str = 'data:image/jpeg;base64,' + ImageData;
      var storageRef = firebase.storage().ref();
      var user = JSON.parse(localStorage.getItem("usuarix"));
      var tiempo = Date.now();
      var nombre = user + "_" + tiempo + "_" + tipo + ".jpg";
      var childRef = storageRef.child(nombre);
      childRef.putString(base64Str, 'data_url').then(function (snapshot) {

      });
    }, (Err) => {
      alert(JSON.stringify(Err));
    })
  }

  traerFoto() {
    this.spinner = true;
    let auxLista = [];
    this.fire.storage.ref().listAll().then((lista) => {
      lista.items.forEach(item => {
        item.getDownloadURL().then((link) => {
          let archivo = { nombre: item.name, link };
          archivo.nombre.includes('fea');
          auxLista.push(archivo);
          this.fotos = auxLista;
          // console.log(auxLista);
          // console.log(this.fotos);
        })
      });
      setTimeout(() => {
        this.spinner = false;
        this.leerVotos();
      }, 3000)
    });
  }

  leerVotos() {
    this.databases.obtenerXTodos("votaciones").subscribe((votosImgSnap) => {
      votosImgSnap.forEach((response: any) => {
        let infoImg = response.payload.doc.data();
        infoImg["id"] = response.payload.doc.id;
        this.listaVoto.push(infoImg);
        this.actualizarVoto(infoImg);
      })
    });
  }

  mostrarImagen(fotoGrande) {
    // console.info(fotoGrande);
    this.mostrarGrid = false;
    this.mostrarUnicaImagen = true;
    this.linkFoto = fotoGrande.link;
    this.errorMensaje = "";
  }

  cerrarImagen(){
    this.mostrarGrid = true;
    this.mostrarUnicaImagen = false;
  }

  actualizarVoto(votoInf: any) {
    this.fotos.forEach((foto: any) => {
      // console.info(votoInf);
      // console.info(foto);
      if (foto.link == votoInf.imagen) {
        // foto["cantVot"] = votoInf.votos.length;
        // console.info(foto);
        this.cantVotos = votoInf.votos.length;
        // alert(votoInf.votos.length);
        // console.info(foto);
      }
    });
  }

  votar(imagenLink) {
    let votos = [];
    var user = JSON.parse(localStorage.getItem("usuarix"));
    var encontro = false;
    var yaVoto = false;
    votos.push(user);
    this.listaVoto.forEach(voto => {
      if (voto.imagen == imagenLink) {
        encontro = true;
        voto.votos.forEach(usuVoto => {
          if (usuVoto == user) {
            yaVoto = true;
            this.errorMensaje = "Voto no registrado, ¡usted ya voto!"
          }
        });
        if (!yaVoto) {
          voto.votos.push(user);
          // console.log(voto);
          this.databases.actualizar("votaciones", voto.id, voto);
        }
        // alert(voto.votos.length);
        this.cantVotos = voto.votos.length;
      }
    });
    if (encontro == false) {
      this.databases.crear("votaciones", { "imagen": imagenLink, "votos": votos })
    }
    this.leerVotos();
  }

  mostrarGaleria(){
    this.mostrarGrid = true;
    this.traerFoto();
  }


}
