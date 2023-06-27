import { GlobalService } from '../../../../services/global.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { servicio } from '../modelo-servicio';

@Injectable({
  providedIn: 'root'
})
export class ServiciosVirtualesService   {

  servicio: servicio | undefined;
  constructor(private http: HttpClient, private globalService: GlobalService) { }

  ruta=this.globalService.var_ruta_prod;

  //Obtenemos todos los servision no destacados
  getServiciosVirtuales(): any {
    const url =this.ruta+'get_servicios_virtuales';
    const body = { "tipo_servicio": 0 };
    return this.http.post(url, body);
  }

    //Obtenemos todos los servicios destacados
    getServiciosVirtuales_destacados(): any {
      const url =this.ruta+'get_servicios_virtuales';
      const body = { "tipo_servicio": 1 };
      return this.http.post(url, body);
    }
  setoidServicio(valor: any) {
    this.servicio = valor;
  }

  getoidServicio() {
    return this.servicio;
  }

}


