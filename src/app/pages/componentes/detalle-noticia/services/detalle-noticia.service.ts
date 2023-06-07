import { GlobalService } from './../../../../services/global.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetalleNoticiaService {

  constructor(private http: HttpClient, private globalService: GlobalService) { }
  ruta= this.globalService.var_ruta_prod;

  get_detalle_noticia(parametro: any): any {
    const url =this.ruta+'get_noticias_detalle';
    const body = { "oidnoticia": parametro };
    return this.http.post(url, body);
  }
}
