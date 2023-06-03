import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetalleConvocatoriaService {

  constructor(private http: HttpClient) { }
  get_detalle_oferta(parametro: any): any {
    const url ='http://35.231.9.84:8091/scriptcase/app/CCC/ws_pme/?get_ofertas_detalle';
    const body = { "oidoferta": parametro };
    return this.http.post(url, body);
  }

  enviar_oferta(parametro: any): any {
    const url = 'http://35.231.9.84:8091/scriptcase/app/CCC/ws_pme/?get_registroOferta';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify({ parametro });
    return this.http.post(url, body, { headers: headers });
  }
}
