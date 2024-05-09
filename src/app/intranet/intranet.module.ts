import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntranetRoutingModule } from './intranet-routing.module';
import { InicioComponent } from './inicio.component';
import { LayoutModule } from '../layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { CalendarioComponent } from './calendario/calendario.component';
import { UsuarioPerfilComponent } from './usuario-perfil/usuario-perfil.component';



@NgModule({
  declarations: [
    InicioComponent,
    CalendarioComponent,
    UsuarioPerfilComponent
  ],
  imports: [
    CommonModule,
    IntranetRoutingModule,
    LayoutModule,
    HttpClientModule,
  ]
})
export class IntranetModule { 
  constructor() {
    console.log('intranet loaded');
  }
}

