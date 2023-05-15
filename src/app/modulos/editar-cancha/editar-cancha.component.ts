import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-cancha',
  templateUrl: './editar-cancha.component.html',
  styleUrls: ['./editar-cancha.component.css']
})
export class EditarCanchaComponent implements OnInit{

  canchaN= {
    nombre: "",
    establecimiento: "",
  }
  

  constructor(private router: Router){}

  goToPage(pageName: string):void{
    this.router.navigate([`${pageName}`]);
  } 

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  SaveData(value: any){
    this.canchaN = value;
  }
}
