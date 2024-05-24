import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RMascotaComponent } from './r-mascota.component';
import { MascotaService } from '../../service/mascota.service';
import { of } from 'rxjs';
import { MatNativeDateModule } from '@angular/material/core';

describe('RMascotaComponent', () => {
  let component: RMascotaComponent;
  let fixture: ComponentFixture<RMascotaComponent>;
  let mascotaService: jasmine.SpyObj<MascotaService>;

  beforeEach(async () => {
    const mascotaServiceSpy = jasmine.createSpyObj('MascotaService', ['agregarMascota']);

    await TestBed.configureTestingModule({
      declarations: [RMascotaComponent],
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCardModule,
        MatButtonModule,
        BrowserAnimationsModule,
        HttpClientTestingModule
      ],
      providers: [
        { provide: MascotaService, useValue: mascotaServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RMascotaComponent);
    component = fixture.componentInstance;
    mascotaService = TestBed.inject(MascotaService) as jasmine.SpyObj<MascotaService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invalidate the form if required fields are empty', () => {
    component.mascotaForm.controls['nombreMascota'].setValue('');
    component.mascotaForm.controls['fechaNacimiento'].setValue('');
    component.mascotaForm.controls['peso'].setValue('');
    component.mascotaForm.controls['alimentacion'].setValue('');
    component.mascotaForm.controls['color'].setValue('');
    component.mascotaForm.controls['razaId'].setValue('');

    expect(component.mascotaForm.valid).toBeFalse();
  });

  it('should validate the form if all required fields are filled', () => {
    component.mascotaForm.controls['nombreMascota'].setValue('Rex');
    component.mascotaForm.controls['fechaNacimiento'].setValue('2022-01-01');
    component.mascotaForm.controls['peso'].setValue(10);
    component.mascotaForm.controls['alimentacion'].setValue('Dry Food');
    component.mascotaForm.controls['color'].setValue('Brown');
    component.mascotaForm.controls['razaId'].setValue(1);
    component.mascotaForm.controls['fotoMascota'].setValue(new File([''], 'foto.jpg'));

    expect(component.mascotaForm.valid).toBeTrue();
  });

  it('should call registrarMascota method on form submit', () => {
    spyOn(component, 'registrarMascota');

    const form = fixture.debugElement.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));

    expect(component.registrarMascota).toHaveBeenCalled();
  });

  it('should call mascotaService.agregarMascota on registrarMascota', () => {
    component.mascotaForm.controls['nombreMascota'].setValue('Rex');
    component.mascotaForm.controls['fechaNacimiento'].setValue('2022-01-01');
    component.mascotaForm.controls['peso'].setValue(10);
    component.mascotaForm.controls['alimentacion'].setValue('Dry Food');
    component.mascotaForm.controls['color'].setValue('Brown');
    component.mascotaForm.controls['razaId'].setValue(1);
    component.mascotaForm.controls['fotoMascota'].setValue(new File([''], 'foto.jpg'));

    mascotaService.agregarMascota.and.returnValue(of('Mascota registrada correctamente'));

    component.registrarMascota();

    expect(mascotaService.agregarMascota).toHaveBeenCalled();
  });
});
