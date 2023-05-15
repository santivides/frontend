import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  campo = '../images/blink.jpg';
  logo = '../images/logo.png';
  DB = '../images/DBmodel.jpg';

  constructor(private router: Router){}

  goToPage(pageName: string):void{
    this.router.navigate([`${pageName}`]);
  }  
}
