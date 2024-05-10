import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import baserUrl from './helper';
import { Mascota } from '../modelos/mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  private apiUrl = `${baserUrl}/api/v1/mascota/agregar`;

  constructor(private http: HttpClient) { }

  agregarMascota(data: FormData): Observable<any> {
    return this.http.post(this.apiUrl, data, { responseType: 'text' })
      .pipe(
        catchError(error => {
          console.error('Error al registrar mascota:', error.error);
          return throwError(() => new Error('Algo salió mal; por favor intenta nuevamente más tarde.'));
        })
      );
  }

  listarMascotas(): Observable<Mascota[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.get<Mascota[]>(`${baserUrl}/api/v1/mascota/listar`, { headers });
  }
}
