import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taller_semana_6';
  verLogin: boolean = false;
  verRegistro: boolean = false;

  visualizarRegistro():void{
    this.verRegistro=true;
    this.verLogin=false;
  }

  visualizarLogin():void{
    this.verRegistro=false;
    this.verLogin=true;
  }
}
