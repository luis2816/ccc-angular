import { GlobalService } from 'src/app/services/global.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SwiperEventoService {

  constructor(private http: HttpClient, private globalService: GlobalService) { }

  url=this.globalService.var_ruta_prod;

  getEventos(parametro: any): any {
    const url =this.url+'get_eventos_destino';
    const body = { "oidDestino": parametro };
    return this.http.post(url, body);
  }
}
