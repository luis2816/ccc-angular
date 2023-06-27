import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Injectable({
  providedIn: 'root'
})
export class SwiperObjetivosService {

  constructor(private http: HttpClient, private globalService: GlobalService) { 
  }
  ruta= this.globalService.var_ruta_prod;
 
  getObjetivos(parametro: any): any {
   const url =this.ruta+'get_objetivos_modulo';
     const body = { "modulo": parametro };
     return this.http.post(url, body);
 }
}
