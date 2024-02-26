import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taller_semana_6';
  verLogin: boolean = false;
  verRegistro: boolean = false;
  registroForm: FormGroup;
  loginForm: FormGroup;

  constructor(private authService: AuthService) {
    this.registroForm = new FormGroup({
      user: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
    });
    this.loginForm = new FormGroup({
      user: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  visualizarRegistro():void{
    this.verRegistro=true;
    this.verLogin=false;
  }

  visualizarLogin():void{
    this.verRegistro=false;
    this.verLogin=true;
  }

  onSubmitRegister():void {
    if (this.registroForm.valid && this.registroForm.value.password === this.registroForm.value.confirmPassword) {
      this.authService.register(this.registroForm.value.user, this.registroForm.value.password).subscribe({
        next: (response) => {
          console.log('Registro exitoso', response);
        },
        error: (error) => {
          console.error('Error en el registro', error);
        }
      });
    } else if (this.registroForm.value.password !== this.registroForm.value.confirmPassword) {
      console.error('Las contraseñas no coinciden');
    }
  }

  onSubmitLogin():void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value.user, this.loginForm.value.password).subscribe({
        next: (response) => {
          console.log('Login exitoso', response.mensaje);
        },
        error: (error) => {
          console.error('Error en el login', error.error.mensaje);
        }
      });
    }
  }

}