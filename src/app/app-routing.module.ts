import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modulos/inicio/inicio.component';
import { CanchasComponent } from './modulos/canchas/canchas.component';
import { ContactenosComponent } from './modulos/contactenos/contactenos.component';
import { EditarCanchaComponent } from './modulos/editar-cancha/editar-cancha.component';
import { LoginComponent } from './modulos/login/login.component';
import { RegistroComponent } from './modulos/registro/registro.component';

const routes: Routes = [
  {path : "", component: InicioComponent},
  {path : "canchas", component: CanchasComponent},
  {path : "contactenos", component: ContactenosComponent},
  {path : "editar-cancha", component: EditarCanchaComponent},
  {path : "login", component: LoginComponent},
  {path : "registro", component: RegistroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
