import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarraNavegacionComponent } from './modulos/barra-navegacion/barra-navegacion.component';
import { ContactenosComponent } from './modulos/contactenos/contactenos.component';
import { CanchasComponent } from './modulos/canchas/canchas.component';
import { EditarCanchaComponent } from './modulos/editar-cancha/editar-cancha.component';
import { InicioComponent } from './modulos/inicio/inicio.component';
import { LoginComponent } from './modulos/login/login.component';
import { RegistroComponent } from './modulos/registro/registro.component';
import { ReservasComponent } from './modulos/reservas/reservas.component';
import { EstablecimientosComponent } from './modulos/establecimientos/establecimientos.component';

const routes: Routes = [
  {path : "", component: InicioComponent},
  {path : "inicio", component: InicioComponent},
  {path : "canchas", component: CanchasComponent},
  {path : "contactenos", component: ContactenosComponent},
  {path : "editar-cancha", component: EditarCanchaComponent},
  {path : "login", component: LoginComponent},
  {path : "registro", component: RegistroComponent},
  {path: "reservas" , component: ReservasComponent},
  {path: "establecimientos" , component: EstablecimientosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

