import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsuarioPerfilComponent } from './usuario-perfil.component';
import { UsuarioService } from '../../service/usuario.service'; 
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('UsuarioPerfilComponent', () => {
  let component: UsuarioPerfilComponent;
  let fixture: ComponentFixture<UsuarioPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuarioPerfilComponent],
      imports: [HttpClientTestingModule], // Importa HttpClientTestingModule para simular las peticiones HTTP
      providers: [UsuarioService], // Provee el servicio de Usuario
      schemas: [CUSTOM_ELEMENTS_SCHEMA] // Agrega esto si tienes elementos personalizados en tu template
    }).compileComponents();

    fixture = TestBed.createComponent(UsuarioPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
