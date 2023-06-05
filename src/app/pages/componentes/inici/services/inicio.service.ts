import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from 'src/app/services/global.service';

@Injectable({
  providedIn: 'root'
})
export class InicioService {
  url = this.globalService.var_ruta_prod;

  constructor(private http: HttpClient, private globalService: GlobalService) { }
  

  getNoticias(): any {
    const url =this.url+'get_noticias';
    return this.http.get(url);
  }

  getEventos(parametro: any): any {
    const url =this.url+'get_eventos_destino';
    const body = { "oidDestino": parametro };
    return this.http.post(url, body);
  }
  
}
