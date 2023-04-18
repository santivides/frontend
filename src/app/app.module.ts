import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './modulos/barra-navegacion/barra-navegacion.component';
import { CanchasComponent } from './modulos/canchas/canchas.component';
import { ContactenosComponent } from './modulos/contactenos/contactenos.component';
import { InicioComponent } from './modulos/inicio/inicio.component';
import { RegistroComponent } from './modulos/registro/registro.component';
import { ReactiveFormsModule , FormsModule, NgForm} from '@angular/forms';
import { LoginComponent } from './modulos/login/login.component';
import { ReservasComponent } from './modulos/reservas/reservas.component';
import { EditarCanchaComponent } from './modulos/editar-cancha/editar-cancha.component';


@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    CanchasComponent,
    ContactenosComponent,
    InicioComponent,
    RegistroComponent,
   EditarCanchaComponent,
    LoginComponent,
    ReservasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
