import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  constructor(private http: HttpClient) { }
  
  getNoticias(): any {
    const url = 'https://bodecom.com/ccc/ws_pme/?get_noticias';
    return this.http.get(url);
  }

  getEventos(parametro: any): any {
    const url ='https://bodecom.com/ccc/ws_pme/?get_eventos_destino';
    const body = { "oidDestino": parametro };
    return this.http.post(url, body);
  }
}
