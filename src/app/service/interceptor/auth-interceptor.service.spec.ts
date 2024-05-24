import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa esto
import { AuthInterceptor } from './auth-interceptor.service'; 

describe('AuthInterceptor', () => {
  let service: AuthInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Añade esto
      providers: [AuthInterceptor]
    });
    service = TestBed.inject(AuthInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
