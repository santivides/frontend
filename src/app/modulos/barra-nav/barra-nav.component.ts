import { Component,HostListener, Renderer2,OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navmenu',
  templateUrl: './barra-nav.component.html',
  styleUrls: ['./barra-nav.component.css']
})
export class BarraComponent implements OnInit {

  ngOnInit(): void {
  }

  img = './assets/logos/logo-pagina.png';

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  constructor(private renderer: Renderer2,private router:Router) { }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const scroll = document.documentElement.scrollTop;
    const header = document.querySelector('header');

    if (scroll > 10) {
      this.renderer.addClass(header, 'header__active');
    } else {
      this.renderer.removeClass(header, 'header__active');
    }
  }
  navegar() {
    this.router.navigate(['/canchas']);
  }

}