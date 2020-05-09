import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import {Location} from '@angular/common';

@Component({
  selector: 'app-chat-b',
  templateUrl: './chat-b.page.html',
  styleUrls: ['./chat-b.page.scss'],
})
export class ChatBPage implements OnInit {

  d: any = new Date();
  h: any = this.d.getHours();
  m: any = this.d.getMinutes();

  nuevoMsg: any = "";
  @ViewChild(IonContent, { static: false }) content: IonContent

  mensajes = [
    {
      usuarix: "Anonimo",
      fecha: this.h + ":" + (this.m - 3),
      msg: "Hola chat B!",
    },
    {
      usuarix: "Administrador",
      fecha: this.h + ":" + (this.m - 2),
      msg: "Buen día",
    },
    {
      usuarix: "Invitado",
      fecha: this.h + ":" + (this.m - 2),
      msg: "Buenas tardes mejor dicho",
    },
    {
      usuarix: "Tester",
      fecha: this.h + ":" + (this.m - 1),
      msg: "¿Todo anda bien?",
    },
    {
      usuarix: "Usuario",
      fecha: this.h + ":" + (this.m),
      msg: "Parece que si.",
    },
  ]

  usuarixAct: string = "";

  constructor(private _location: Location) { }

  ngOnInit() {
    this.recuperarUsuarix();
  }

  recuperarUsuarix(){
    this.usuarixAct = JSON.parse(localStorage.getItem("usuarix"));
  }

  mandarMensaje() {
    if((this.nuevoMsg).length >21){
      this.mensajes.push({
        usuarix: this.usuarixAct,
        fecha: "XX",
        msg: "Error! Su mensaje contenia mas de los 21 caracteres permitidos.",
      });
    }else{
      this.mensajes.push({
        usuarix: this.usuarixAct,
        fecha: this.h + ":" + this.m,
        msg: this.nuevoMsg,
      });
    }
    this.nuevoMsg = "";
    setTimeout(() => {
      this.content.scrollToBottom(200);
    });
  }

  paginaAnterior(){
    this._location.back();
  }

}
