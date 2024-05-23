import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../../service/mascota.service';
import { Mascota } from '../../modelos/mascota';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-mascota',
  templateUrl: './lista-mascota.component.html',
  styleUrls: ['./lista-mascota.component.css']
})
export class ListaMascotaComponent implements OnInit {
  mascotas: Mascota[] = [];
  cantidadMascotas: number = 0;

  constructor(
    private mascotaService: MascotaService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cargarMascotas();
  }

  cargarMascotas() {
    this.mascotaService.listarMascotas().subscribe({
      next: (mascotas) => {
        this.mascotas = mascotas;
        this.cantidadMascotas = mascotas.length;
      },
      error: (error) => console.error('Error al obtener las mascotas:', error.message)
    });
  }

  agregarMascota() {
    this.router.navigate(['/intranet/user']);
  }
}
