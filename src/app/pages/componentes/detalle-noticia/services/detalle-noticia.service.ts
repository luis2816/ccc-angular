import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetalleNoticiaService {

  constructor(private http: HttpClient) { }

  get_detalle_noticia(parametro: any): any {
    const url ='http://35.231.9.84:8091/scriptcase/app/CCC/ws_pme/?get_noticias_detalle';
    const body = { "oidnoticia": parametro };
    return this.http.post(url, body);
  }
}
