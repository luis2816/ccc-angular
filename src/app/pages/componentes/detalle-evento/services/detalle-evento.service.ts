import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DetalleEventoService {

  constructor(private http: HttpClient) { }

  get_detalle_evento(parametro: any): any {
    const url ='https://bodecom.com/ccc/ws_pme/?get_eventos_detalle';
    const body = { "oidevento": parametro };
    return this.http.post(url, body);
  }
}
