import { Component, OnInit } from '@angular/core';
import { EventosService } from './services/eventos.service';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos: any = [];
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

}
