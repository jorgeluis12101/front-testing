import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface EventData {
  veterinaria: string;
  descripcion: string;
  costo: string;
  tipoEvento: string;
  archivo: File | null;
  mascotaId: number;
}

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.css']
})
export class EventModalComponent {
  eventForm: FormGroup;
  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EventModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EventData
  ) {
    this.eventForm = this.fb.group({
      veterinaria: ['', Validators.required],
      descripcion: ['', Validators.required],
      costo: ['', Validators.required],
      tipoEvento: ['', Validators.required],
      archivo: [null],
      mascotaId: [data.mascotaId, Validators.required]
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.eventForm.patchValue({ archivo: this.selectedFile });
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.eventForm.valid) {
      const formData = { ...this.eventForm.value, archivo: this.selectedFile };
      this.dialogRef.close(formData);
    }
  }
}
