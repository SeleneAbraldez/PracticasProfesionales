import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions, DestinationType, EncodingType, PictureSourceType } from '@ionic-native/camera/ngx';
import * as firebase from 'firebase';
import { Router } from "@angular/router";
import { AngularFireStorage } from "@angular/fire/storage";


@Component({
  selector: 'app-elegir',
  templateUrl: './elegir.page.html',
  styleUrls: ['./elegir.page.scss'],
})
export class ElegirPage implements OnInit {

  // imgUrl;

  constructor(
    private camera: Camera,
    private fire : AngularFireStorage,
    private router: Router, 
  ) { }

  ngOnInit() {
  }

  // abrirCamara() {
  //   this.camera.getPicture({
  //     sourceType: this.camera.PictureSourceType.CAMERA,
  //     destinationType: this.camera.DestinationType.FILE_URI
  //   }).then((res) => {
  //     this.imgUrl = res;
  //   }).catch(e => {
  //     console.log(e);
  //   })
  // }

  // async sacarFoto(tipo) {
  //   // try {
  //     //definir las opciones de la camara
  //     const opciones: CameraOptions = {
  //       quality: 50,
  //       targetHeight: 600,
  //       destinationType: this.camera.DestinationType.DATA_URL,
  //       encodingType: this.camera.EncodingType.JPEG,
  //       mediaType: this.camera.MediaType.PICTURE,
  //       correctOrientation: true,
  //     }
  //     // const resultado = await this.camera.getPicture(opciones);
  //     // const imagen = 'data:image/jpeg;base64,${resultado}';
  //     // const imagenes = storage().ref('imagenes');
  //     // imagenes.putString(imagen, 'data_url');
  //     this.camera.getPicture(opciones).then((ImageData)=>{
  //       var base64Str = 'data:image/jpeg;base64,' + ImageData;
  //       var storageRef = firebase.storage().ref();
  //       var user = JSON.parse(localStorage.getItem("usuarix"));;
  //       var nombre = user + "_" + tipo + "_" + ".jpg";
  //       var childRef = storageRef.child(nombre);
  //       childRef.putString(base64Str, 'data_url').then(function(snapshot)
  //       {
  //         alert('Subido correctamente!');
  //         this.router.navigateByUrl("/home");
  //       });
  //     }, (Err)=>{
  //       alert(JSON.stringify(Err));
  //     })
  //   // } catch (e) {
  //   //   console.log(e);
  //   //   alert(e);
  //   // }
  // }

  // traerFoto(){
  //   this.fire.storage.ref().listAll();
  // }

  redirectear(donde){
    this.router.navigateByUrl(donde);
  }


}
