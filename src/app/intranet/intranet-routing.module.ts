import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio.component';

import { UsuarioPerfilComponent } from './usuario-perfil/usuario-perfil.component';
import { AdminComponent } from './admin/admin.component';
import { AdminGuard } from '../service/guards/admin.guard';
import { UserComponent } from './user/user.component';
import { UserGuard } from '../service/guards/user.guard';
import { RMascotaComponent } from './r-mascota/r-mascota.component';
import { ListaMascotaComponent } from './lista-mascota/lista-mascota.component';


const routes: Routes = [
  
    { path: '', component: InicioComponent, 
    children: [

        {path: 'perfil', component: UsuarioPerfilComponent },
        {
          path: 'admin', component: AdminComponent, canActivate: [AdminGuard],
          children: [

           ], 
        },
        {
          path: 'user', component: UserComponent, canActivate: [UserGuard],
          children: [
            {path: '',  component: RMascotaComponent },
            {path: 'lista-mascotas',  component: ListaMascotaComponent }



           ], 
        }
      ] 
  },
    
  
];
    
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule { 

}