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
  getServiciosVirtuales(): any {
    const url =this.ruta+'get_servicios_virtuales';
    return this.http.get(url);
  }
  setoidServicio(valor: any) {
    this.servicio = valor;
  }

  getoidServicio() {
    return this.servicio;
  }

}


