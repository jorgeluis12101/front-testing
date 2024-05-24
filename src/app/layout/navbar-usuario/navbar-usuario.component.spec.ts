import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NavbarUsuarioComponent } from './navbar-usuario.component';
import { AuthService } from '../../service/auth.service';

describe('NavbarUsuarioComponent', () => {
  let component: NavbarUsuarioComponent;
  let fixture: ComponentFixture<NavbarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarUsuarioComponent],
      imports: [HttpClientTestingModule], // Asegúrate de importar esto
      providers: [AuthService]
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
