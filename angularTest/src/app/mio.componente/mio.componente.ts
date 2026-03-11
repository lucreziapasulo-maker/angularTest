import { Component } from '@angular/core';

@Component({
  selector: 'app-mio-componente',
  standalone: false,
  templateUrl: './mio.componente.html',
  styleUrl: './mio.componente.css',
})
export class MioComponente {
  nome: string = "MioComponente11111";
  onClick(click: MouseEvent) {
    this.nome = "";  
  }
}
