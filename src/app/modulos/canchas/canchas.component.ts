import { Component } from '@angular/core';

@Component({
  selector: 'app-canchas',
  templateUrl: './canchas.component.html',
  styleUrls: ['./canchas.component.css']
})
export class CanchasComponent {

  cancha = './assets/images/Soccer_field_icon.png';
  cancha1 = '../images/elCampin.jpeg';
  cancha2 = '../images/blink.jpg';
  cancha3 = '../images/radioUno.jpg'


  addCourt(): void {
    console.log('Agregar cancha');
  }

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  canchas= [
    {
      price: 20000,
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, facilis!',
      nombre: 'Cancha 1',
      imagen: this.cancha1
    },
    {
      nombre: 'Cancha 2',
      price: 50000,
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, facilis!',
      imagen: this.cancha2
    },
    {
      nombre: 'Cancha 3',
      price: 35000,
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, facilis!',
      imagen: this.cancha3
    }
  ]

}
