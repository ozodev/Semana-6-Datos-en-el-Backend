import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './auth-service.service';
import { ToastService } from './toast.service';

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

  constructor(private authService: AuthService, private toastService:ToastService) {
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
          this.showSuccess(response.mensaje)
        },
        error: (error) => {
          this.showDanger(error.error.mensaje);
        }
      });
    } else if (this.registroForm.value.password !== this.registroForm.value.confirmPassword) {
      this.showDanger('Las contraseñas no coinciden');
    }
  }

  onSubmitLogin():void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value.user, this.loginForm.value.password).subscribe({
        next: (response) => {
          this.showSuccess(response.mensaje)
        },
        error: (error) => {
          this.showDanger(error.error.mensaje);
        }
      });
    }
  }

	showSuccess(mensaje:string) {
		this.toastService.show({ mensaje, classname: 'bg-success text-light m-2', delay: 10000 });
	}

	showDanger(mensaje:string) {
		this.toastService.show({ mensaje, classname: 'bg-danger text-light m-2', delay: 10000 });
	}

	ngOnDestroy(): void {
		this.toastService.clear();
	}

}