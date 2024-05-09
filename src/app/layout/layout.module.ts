import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarPrincipalComponent } from './navbar-principal/navbar-principal.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarUsuarioComponent } from './navbar-usuario/navbar-usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';


@NgModule({
  declarations: [
    NavbarPrincipalComponent,
    FooterComponent,
    NavbarUsuarioComponent
  ],
  
  imports: [
    CommonModule,
    RouterLink,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule
    
  ],

  exports: [
    NavbarPrincipalComponent,
    FooterComponent,
    NavbarUsuarioComponent
  ],
  
})
export class LayoutModule { }
