import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { DatosActualizarUsuario, Usuario, UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-perfil',
  templateUrl: './usuario-perfil.component.html',
  styleUrls: ['./usuario-perfil.component.css']
})
export class UsuarioPerfilComponent implements OnInit {
  usuario: Usuario | null = null;
  editMode: boolean = false;
  updatedDatos: DatosActualizarUsuario = {};

  constructor(private usuarioService: UsuarioService, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.cargarPerfil();
  }

  cargarPerfil(): void {
    this.usuarioService.obtenerPerfil().subscribe(
      (data) => {
        this.usuario = data;
      },
      (error) => {
        console.error('Error al cargar el perfil', error);
      }
    );
  }

  actualizarPerfil(): void {
    if (this.usuario) {
      this.usuarioService.actualizarPerfil(this.updatedDatos).subscribe(
        (data) => {
          this.usuario = data;
          this.editMode = false;
        },
        (error) => {
          console.error('Error al actualizar el perfil', error);
        }
      );
    }
  }

  eliminarCuenta(): void {
    this.usuarioService.eliminarCuenta().subscribe(
      (message) => {
        console.log(message);
        this.authService.logout();
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error al eliminar la cuenta', error);
      }
    );
  }

  habilitarEdicion(): void {
    this.editMode = true;
    if (this.usuario) {
      this.updatedDatos = {
        nombre: this.usuario.nombre,
        apellido: this.usuario.apellido,
        dni: this.usuario.dni,
        telefono: this.usuario.telefono,
        correo: this.usuario.correo,
        username: this.usuario.username
      };
    }
  }
}