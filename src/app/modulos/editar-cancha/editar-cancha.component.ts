import { Component, OnInit } from '@angular/core';

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
  

  constructor(){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  SaveData(value: any){
    this.canchaN = value;
  }
}
