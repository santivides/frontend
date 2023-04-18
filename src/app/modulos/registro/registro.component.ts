import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{

  nuevoUsuario= {

    nombre: "",
    edad: "",
    correo: "",
    contrasena: ""

  }
  
  constructor(){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  SaveData(value: any){
    this.nuevoUsuario = value;
  }
}
