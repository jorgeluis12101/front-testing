import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-navbar-usuario',
  templateUrl: './navbar-usuario.component.html',
  styleUrls: ['./navbar-usuario.component.css']
})
export class NavbarUsuarioComponent {
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.isLoggedIn().subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });

    // Obtener el rol del usuario actual
    this.authService.getRole().subscribe(role => {
      this.isAdmin = role === 'ADMIN'; // Verificar si el rol es 'admin'
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
