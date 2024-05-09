import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class RazaService {
  private apiUrl = `${baserUrl}/api/v1/mascota/agregar`;
  constructor(private http: HttpClient) { }

  buscarRazas(nombre: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/buscar`, { params: { nombre } });
  }

}
