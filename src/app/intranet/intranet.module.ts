import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntranetRoutingModule } from './intranet-routing.module';
import { InicioComponent } from './inicio.component';
import { LayoutModule } from '../layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { CalendarioComponent } from './calendario/calendario.component';
import { UsuarioPerfilComponent } from './usuario-perfil/usuario-perfil.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { RMascotaComponent } from './r-mascota/r-mascota.component';


import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ListaMascotaComponent } from './lista-mascota/lista-mascota.component';

@NgModule({
  declarations: [
    InicioComponent,
    CalendarioComponent,
    UsuarioPerfilComponent,
    UserComponent,
    AdminComponent,
    RMascotaComponent,
    ListaMascotaComponent
  ],
  imports: [
    CommonModule,
    IntranetRoutingModule,
    LayoutModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatAutocompleteModule
  
  ],
  
}
)
export class IntranetModule { 
  constructor() {
    console.log('intranet loaded');
  }
}

