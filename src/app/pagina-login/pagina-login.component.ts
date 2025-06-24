import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pagina-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './pagina-login.component.html',
  styleUrl: './pagina-login.component.scss'
})
export class PaginaLoginComponent {
  email: string = ''
  password: string = ''
  errorMessage: string = ''

  private readonly validCredentiales = {
    email: 'admin@modaperu.com',
    password : '123456'
  }
  
  constructor(private router: Router) {}
  onLogin(){
    console.log('Haciendo Login')
    this.errorMessage = '';

    if(this.email === this.validCredentiales.email && this.password === this.validCredentiales.password){
      this.router.navigate(['/PaginaMain'])
    } else {
      this.errorMessage = 'Las Credenciales son inválidas'
    }
  }


}
