import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetalleEventoService } from './services/detalle-evento.service';

@Component({
  selector: 'app-detalle-evento',
  templateUrl: './detalle-evento.component.html',
  styleUrls: ['./detalle-evento.component.css']
})
export class DetalleEventoComponent implements OnInit {

  dato: number | undefined;
  evento: any= [];
  constructor(private route: ActivatedRoute, private detalleEventoService: DetalleEventoService ) {}


  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const parametro = params['parametro'];
          //Se obtine el detalle del evento
          this.detalleEventoService.get_detalle_evento(parametro)
          .subscribe((response: any) => this.evento=response.eventos);
        
      // Realizar las operaciones necesarias con el parámetro recibido
    });
  }
}

