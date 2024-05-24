import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa HttpClientTestingModule

import { MascotaService } from './mascota.service';

describe('MascotaService', () => {
  let service: MascotaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Importa HttpClientTestingModule aquí
      providers: [MascotaService] // Provee el servicio MascotaService
    });
    service = TestBed.inject(MascotaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
