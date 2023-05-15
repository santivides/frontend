import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  
  constructor(private router: Router){}

  goToPage(pageName: string):void{
    this.router.navigate([`${pageName}`]);
  } 

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  SaveData(value: any){
    this.nuevoUsuario = value;
  }
}
