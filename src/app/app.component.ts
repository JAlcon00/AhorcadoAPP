import { Component } from '@angular/core';
import { AhorcadoAPP } from './class/juego-ahorcado.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imagenes = ['h1','h2','h3','h4','h5','h6','h7']
  mostrarConfiguracion = false;
  juego = new AhorcadoAPP('MACHUPICHU', 6);
  intentoActual = '';
  nuevaPalabra = '';

  intentar() {
    if (this.intentoActual.length) {
      this.juego.intentar(this.intentoActual.charAt(this.intentoActual.length - 1));
      this.intentoActual = '';
    }
  }
  nuevoJuego(){
    this.juego = new AhorcadoAPP(this.nuevaPalabra, 6);
    this.mostrarConfiguracion = false;
    //this.nuevaPalabra = '';
    
  }
  
}
