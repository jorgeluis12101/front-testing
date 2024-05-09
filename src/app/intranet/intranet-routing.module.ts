import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { UsuarioPerfilComponent } from './usuario-perfil/usuario-perfil.component';


const routes: Routes = [
  
    { path: 'intranet', component: InicioComponent, children: [
        {path: '', component: CalendarioComponent },
        {path: 'perfil', component: UsuarioPerfilComponent },
      ],
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule { 

}