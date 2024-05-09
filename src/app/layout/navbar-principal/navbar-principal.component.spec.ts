import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPrincipalComponent } from './navbar-principal.component';

describe('NavbarPrincipalComponent', () => {
  let component: NavbarPrincipalComponent;
  let fixture: ComponentFixture<NavbarPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarPrincipalComponent]
    });
    fixture = TestBed.createComponent(NavbarPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
