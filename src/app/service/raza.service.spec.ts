import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa HttpClientTestingModule

import { RazaService } from './raza.service';

describe('RazaService', () => {
  let service: RazaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Importa HttpClientTestingModule aquí
      providers: [RazaService] // Provee el servicio RazaService
    });
    service = TestBed.inject(RazaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
