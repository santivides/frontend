import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  login= {
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
    this.login = value;
  }

  autenticar(){
    for(let usuario of this.usuarios){
      if(usuario.correo == this.login.correo && usuario.contraseña == this.login.contrasena){
        console.log("usuario valido");
        
      }
    }
  }

  usuarios = [
    {
      correo: 'jaimito@correo.com',
      contraseña: '123'
    },
    {
      correo: 'tom@correo.com',
      contraseña: '456'
    },
    {
      correo: 'kurt@correo.com',
      contraseña: '789'
    },
  ];
}
