import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { LoginRegisterComponent } from './login-register.component';
import { AuthService } from '../../service/auth.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('LoginRegisterComponent', () => {
  let component: LoginRegisterComponent;
  let fixture: ComponentFixture<LoginRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginRegisterComponent],
      imports: [HttpClientTestingModule, FormsModule], // Include FormsModule
      providers: [AuthService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
