import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import baserUrl from './helper';

export interface DatosActualizarUsuario {
  nombre?: string;
  apellido?: string;
  dni?: string;
  telefono?: string;
  correo?: string;
  username?: string;
}

export interface Usuario {
  id: number;
  nombre: string;
  apellido: string;
  dni: string;
  telefono: string;
  correo: string;
  username: string;
  enabled: boolean;
  rol: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = `${baserUrl}/api/v1/usuario`;

  constructor(private http: HttpClient) {}

  obtenerPerfil(): Observable<Usuario> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.get<Usuario>(`${this.apiUrl}/perfil`, { headers });
  }

  actualizarPerfil(datos: DatosActualizarUsuario): Observable<Usuario> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.put<Usuario>(`${this.apiUrl}/perfil/actualizar`, datos, { headers });
  }

  eliminarCuenta(): Observable<string> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.delete<string>(`${this.apiUrl}/perfil/eliminar`, { headers });
  }
}
