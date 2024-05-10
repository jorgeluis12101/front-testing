// src/app/components/lista-mascota/lista-mascota.component.ts
import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../../service/mascota.service';
import { Mascota } from '../../modelos/mascota';

@Component({
  selector: 'app-lista-mascota',
  templateUrl: './lista-mascota.component.html',
  styleUrls: ['./lista-mascota.component.css']
})
export class ListaMascotaComponent implements OnInit {
  mascotas: Mascota[] = [];

  constructor(private mascotaService: MascotaService) {}

  ngOnInit() {
    this.cargarMascotas();
  }

  cargarMascotas() {
    this.mascotaService.listarMascotas().subscribe({
      next: (mascotas) => this.mascotas = mascotas,
      error: (error) => console.error('Error al obtener las mascotas:', error.message)
    });
  }
}
