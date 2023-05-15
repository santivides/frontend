import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-canchas',
  templateUrl: './canchas.component.html',
  styleUrls: ['./canchas.component.css']
})
export class CanchasComponent {

  cancha = '../images/blink.jpg';
  cancha1 = '../images/radiouno.jpg';
  cancha2 = '../images/elCampin.jpeg';

  constructor(private router: Router){}

  addCourt(): void {
    console.log('Agregar cancha');
  }

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  goToPage(pageName: string):void{
    this.router.navigate([`${pageName}`]);
  }  

}
