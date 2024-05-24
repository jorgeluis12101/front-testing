import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Importa CUSTOM_ELEMENTS_SCHEMA si usas elementos personalizados
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa HttpClientTestingModule si es necesario

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent],
      imports: [HttpClientTestingModule], // Agrega HttpClientTestingModule si tu componente o sus servicios lo necesitan
      schemas: [CUSTOM_ELEMENTS_SCHEMA] // Agrega CUSTOM_ELEMENTS_SCHEMA si usas elementos personalizados
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
