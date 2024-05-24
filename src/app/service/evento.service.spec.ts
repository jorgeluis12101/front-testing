import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Asegúrate de importar HttpClientTestingModule
import { EventoService } from './evento.service';

describe('EventoService', () => {
  let service: EventoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Incluye HttpClientTestingModule
      providers: [EventoService]
    });
    service = TestBed.inject(EventoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
