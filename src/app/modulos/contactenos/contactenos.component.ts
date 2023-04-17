import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent implements OnInit{

  
  comentario = {correo: "", comentario: ""}

  ngOnInit(): void {
    
  }

  mostrarInfo(form: NgForm){
  }
  

}
