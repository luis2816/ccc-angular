import { ServiciosVirtualesService } from './../servicios-virtuales/services/servicios-virtuales.service';
import { Component, OnInit } from '@angular/core';
import { servicio } from '../servicios-virtuales/modelo-servicio';

@Component({
  selector: 'app-detalle-servicio-virtual',
  templateUrl: './detalle-servicio-virtual.component.html',
  styleUrls: ['./detalle-servicio-virtual.component.css']
})
export class DetalleServicioVirtualComponent implements OnInit {

  detalleServicio: servicio | undefined;
  constructor(private serviciosVirtualesService: ServiciosVirtualesService) { }
  ngOnInit(): void {

    this.detalleServicio = this.serviciosVirtualesService.getoidServicio();

    if (this.detalleServicio != null) {
      // Convertir el objeto a una cadena JSON
      var detalleServicioJSON = JSON.stringify(this.detalleServicio);
      // Guardar en el localStorage
      localStorage.setItem('oiServicio', detalleServicioJSON);
    } else {
      // Obtener la cadena JSON almacenada en el localStorage
      var detalleServicioJSONObtenido = localStorage.getItem('oiServicio');
      if (detalleServicioJSONObtenido != null) {
        this.detalleServicio = JSON.parse(detalleServicioJSONObtenido);


      }
    }
  }

}
