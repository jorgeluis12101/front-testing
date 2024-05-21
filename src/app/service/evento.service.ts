import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import baserUrl from './helper';

export interface DatosRegistroEvento {
  veterinaria: string;
  descripcion: string;
  costo: string;
  tipoEvento: string;
  archivo: File | null;
  mascotaId: number;
}

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  private apiUrl = `${baserUrl}/api/v1/evento`;

  constructor(private http: HttpClient) {}

  registrarEvento(evento: DatosRegistroEvento): Observable<any> {
    const formData = new FormData();
    formData.append('datos', new Blob([JSON.stringify({
      veterinaria: evento.veterinaria,
      descripcion: evento.descripcion,
      costo: evento.costo,
      tipoEvento: evento.tipoEvento,
      mascotaId: evento.mascotaId
    })], { type: 'application/json' }));

    if (evento.archivo) {
      formData.append('archivo', evento.archivo);
    }

    return this.http.post(`${this.apiUrl}/registrar`, formData);
  }
}
