import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarix: string;
  contraseña: string;
  constructor() { }

  ngOnInit(): void {
    this.usuarix = "";
    this.contraseña = "";
  }

  public enviar(event): void {
    
  }

}
