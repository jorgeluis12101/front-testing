import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa HttpClientTestingModule si el componente hace solicitudes HTTP
import { NavbarPrincipalComponent } from './navbar-principal.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Añade CUSTOM_ELEMENTS_SCHEMA

describe('NavbarPrincipalComponent', () => {
  let component: NavbarPrincipalComponent;
  let fixture: ComponentFixture<NavbarPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarPrincipalComponent],
      imports: [HttpClientTestingModule], // Asegúrate de importar HttpClientTestingModule si es necesario
      schemas: [CUSTOM_ELEMENTS_SCHEMA] // Añade CUSTOM_ELEMENTS_SCHEMA
    });
    fixture = TestBed.createComponent(NavbarPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
