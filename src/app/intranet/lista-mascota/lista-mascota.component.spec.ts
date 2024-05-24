import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Asegura las peticiones HTTP están simuladas
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Permite elementos personalizados
import { ListaMascotaComponent } from './lista-mascota.component';

describe('ListaMascotaComponent', () => {
  let component: ListaMascotaComponent;
  let fixture: ComponentFixture<ListaMascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaMascotaComponent],
      imports: [HttpClientTestingModule], // Importa módulos necesarios
      schemas: [CUSTOM_ELEMENTS_SCHEMA] // Agrega esto si tienes elementos personalizados en tu template
    }).compileComponents();

    fixture = TestBed.createComponent(ListaMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
