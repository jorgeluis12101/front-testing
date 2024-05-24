import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MascotaService } from '../../service/mascota.service';
import Swal from 'sweetalert2';
import { RazaService } from '../../service/raza.service';

@Component({
  selector: 'app-r-mascota',
  templateUrl: './r-mascota.component.html',
  styleUrls: ['./r-mascota.component.css']
})
export class RMascotaComponent {
  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef;

  mascotaForm: FormGroup;
  imageURL?: string; 
  razas: any[] = [];

  constructor(
    private fb: FormBuilder,
    private mascotaService: MascotaService,
    private razaService: RazaService) {
      
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

  onFileSelect(event: Event): void {
    const element = event.target as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList && fileList.length > 0) {
      const file = fileList[0];
      this.mascotaForm.get('fotoMascota')!.setValue(file);

      // Leer el archivo seleccionado y generar una URL para visualización
      const reader = new FileReader();
      reader.onload = () => {
        this.imageURL = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  openFilePicker(): void {
    this.fileInput.nativeElement.click();
  }

  registrarMascota(): void {
    if (this.mascotaForm.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor completa todos los campos requeridos.',
      });
      return;
    }

    const formData = new FormData();
    formData.append('nombreMascota', this.mascotaForm.get('nombreMascota')!.value);
    formData.append('fechaNacimiento', this.formatDate(this.mascotaForm.get('fechaNacimiento')!.value));
    formData.append('peso', this.mascotaForm.get('peso')!.value);
    formData.append('alimentacion', this.mascotaForm.get('alimentacion')!.value);
    formData.append('color', this.mascotaForm.get('color')!.value);
    formData.append('detalles', this.mascotaForm.get('detalles')!.value);
    formData.append('razaId', this.mascotaForm.get('razaId')!.value);
    if (this.fileInput.nativeElement.files[0]) {
      formData.append('fotoMascota', this.fileInput.nativeElement.files[0]);
    }

    this.mascotaService.agregarMascota(formData).subscribe({
      next: (res) => Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Mascota registrada correctamente.',
      }),
      error: (err) => Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo registrar la mascota.',
      })
    });
  }

  formatDate(date: any): string {
    if (date instanceof Date) {
      return date.toISOString().split('T')[0];
    } else if (typeof date === 'string') {
      return new Date(date).toISOString().split('T')[0];
    }
    return date;
  }

  buscarRaza(event: Event): void {
    const nombre = (event.target as HTMLInputElement).value;
    if (nombre.length > 2) {  // Evitar búsqueda si el nombre es muy corto
      this.razaService.buscarRazas(nombre).subscribe({
        next: (data) => {
          this.razas = data;
        },
        error: () => {
          this.razas = [];
        }
      });
    }
  }
}
