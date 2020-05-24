import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion/ngx';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data: any;
  subscription: any;
  apagado: boolean = true;
  basta : string;

  accelerationX: any;
  accelerationY: any;
  accelerationZ: any;

  sonido = new Audio();

  constructor(
    private router: Router,
    private deviceMotion: DeviceMotion,
    private flashlight: Flashlight,
    private vibration: Vibration,
  ) {
    // this.start();
  }

  start() {
    this.apagado = false;

    this.subscription = this.deviceMotion.watchAcceleration({
      frequency: 300
    }).subscribe((acceleration: DeviceMotionAccelerationData) => {
      this.accelerationX = Math.floor(acceleration.x);
      this.accelerationY = Math.floor(acceleration.y);
      this.accelerationZ = Math.floor(acceleration.z);
      //Acostado x0 y-1 z9 

      if (acceleration.x > 3 && this.basta != "izq") {
        //Izquierda
        this.basta = "izq";
        this.alamIzquierda();
      }
      if (acceleration.x < -3 && this.basta != "der") {
        //derecha
        this.basta = "der";
        this.alamDerecha();
      }
      if (acceleration.y > 8 && this.basta != "ver") {
        //vertical x-1 y9 z1
        this.basta = "ver";
        this.alamVertical();
      }
      if (acceleration.z > 8 && this.basta != "hor") {
        // horizontal 
        this.basta = "hor";
        this.alamHorizontal();
      }

    });
  }

  // ● Al cambiar la posición, a izquierda o a derecha, emitirá un sonido distinto para cada lado.
  alamIzquierda() {
    this.sonido.src = "../../assets/sonidos/Hora.m4a";
    this.sonido.play()
  }
  alamDerecha() {
    this.sonido.src = "../../assets/sonidos/Pichi.m4a";
    this.sonido.play()
  }
  // ● Al ponerlo vertical, se encenderá la luz (por 5 segundos) y emitirá un sonido.
  alamVertical() {
    this.sonido.src = "../../assets/sonidos/Papu.m4a";
    this.sonido.play();
    this.flashlight.switchOn();
    setTimeout (() => {
      this.flashlight.switchOff();
   }, 5000);
  }
  // ● Al ponerlo horizontal, vibrará (por 5 segundos) y emitirá un sonido. 
  alamHorizontal() {
    this.sonido.src = "../../assets/sonidos/Epale.m4a";
    this.sonido.play()
    this.vibration.vibrate(5000);
    setTimeout (() => {
      this.vibration.vibrate(0);
   }, 5000);
  }



  stop() {
    this.apagado = true;
    this.subscription.unsubscribe();
    this.router.navigateByUrl("/contra");
  }



}

