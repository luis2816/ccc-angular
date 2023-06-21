import { Component, OnInit } from '@angular/core';
import { EventosService } from './services/eventos.service';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos: any = [];
  itemsPerPage = 4;
  currentPage = 1;
  constructor(private eventosService: EventosService){}

  ngOnInit(): void { 
    //Se obtiene todos los evntos por medio de un servicio y se guarda en la variable eventos
    this.eventosService.getEventos()
      .subscribe((response: any) => this.eventos= response.lista_eventos);
   
  }
  
  enviarDato(dato: number) {
   // El valor que deseas enviar
    this.eventosService.setoidEvento(dato);
  }

  getCurrentPageEvents() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.eventos.slice(startIndex, endIndex);
}

getPages() {
    const pageCount = Math.ceil(this.eventos.length / this.itemsPerPage);
    return Array(pageCount).fill(0).map((_, index) => index + 1);
}

goToPage(page: number) {
    this.currentPage = page;
}

reemplazarEspacios(titulo: string): string {
  return titulo.replace(/ /g, '-');;
}
}
