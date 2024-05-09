import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MascotaService } from '../../service/mascota.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-r-mascota',
  templateUrl: './r-mascota.component.html',
  styleUrls: ['./r-mascota.component.css']
})
export class RMascotaComponent implements OnInit {

  mascotaForm: FormGroup;
  
  constructor(private fb: FormBuilder, private mascotaService: MascotaService) {
    this.mascotaForm = this.fb.group({
      nombreMascota: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      peso: ['', [Validators.required, Validators.min(1)]],
      alimentacion: ['', Validators.required],
      color: ['', Validators.required],
      detalles: [''],
      razaId: ['', Validators.required],
      fotoMascota: [null, Validators.required]
    });
  }

  ngOnInit(): void {}

  onFileSelect(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList && fileList.length > 0) {
      this.mascotaForm.get('fotoMascota')!.setValue(fileList[0]);
    }
  }
  
  registrarMascota(): void {
    if (this.mascotaForm.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor completa todos los campos requeridos.',
      });
      return;
    }
  
    const formData = new FormData();
    formData.append('nombreMascota', this.mascotaForm.get('nombreMascota')!.value);
    formData.append('fechaNacimiento', this.mascotaForm.get('fechaNacimiento')!.value);
    formData.append('peso', this.mascotaForm.get('peso')!.value);
    formData.append('alimentacion', this.mascotaForm.get('alimentacion')!.value);
    formData.append('color', this.mascotaForm.get('color')!.value);
    formData.append('detalles', this.mascotaForm.get('detalles')!.value);
    formData.append('razaId', this.mascotaForm.get('razaId')!.value);
    if(this.mascotaForm.get('fotoMascota')!.value) {
      formData.append('fotoMascota', this.mascotaForm.get('fotoMascota')!.value);
    }
  
    this.mascotaService.agregarMascota(formData).subscribe({
      next: (res) => {
          Swal.fire(
            '¡Registrado!',
            'La mascota ha sido agregada correctamente.',
            'success'
          );
      },
      error: (err) => {
          console.error('Error al agregar mascota: ', err);
          Swal.fire({
            icon: 'error',
            title: 'Error al registrar',
            text: 'No se pudo registrar la mascota.',
          });
      }
    });
  }
}
