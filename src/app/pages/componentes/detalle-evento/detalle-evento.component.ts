import { Component, OnInit, ElementRef } from '@angular/core';
import { DetalleEventoService } from './services/detalle-evento.service';
import { EventosService } from '../eventos/services/eventos.service';

@Component({
  selector: 'app-detalle-evento',
  templateUrl: './detalle-evento.component.html',
  styleUrls: ['./detalle-evento.component.css']
})
export class DetalleEventoComponent implements OnInit {
  evento: any= [];
  oidEvento: any= Number ;
  constructor(private eventosService: EventosService, 
              private detalleEventoService: DetalleEventoService,
              private elementRef: ElementRef ) {}

  ngOnInit() {
      //obtenemos la varible guardada en el localStorage
      const oidEventolocal = localStorage.getItem('oidEvento');

    //Obtenemos el oidEvento enviado desde el compoenente de eventos
    this.oidEvento=this.eventosService.getoidEvento();
  
    if(this.oidEvento!=null){
        localStorage.setItem('oidEvento', this.oidEvento);
        //Obtenemos el detalle del evento
        this.detalleEventoService.get_detalle_evento(this.oidEvento)
        .subscribe((response: any) => this.evento= response.eventos);

    }else{
      //Obtenemos el detalle del evento
      this.detalleEventoService.get_detalle_evento(oidEventolocal)
      .subscribe((response: any) => this.evento= response.eventos);
    }
  }

 
}

