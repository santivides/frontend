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


@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    CanchasComponent,
    ContactenosComponent,
    InicioComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgForm
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
