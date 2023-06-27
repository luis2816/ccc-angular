import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Injectable({
  providedIn: 'root'
})
export class SwiperProgramasService {


  constructor(private http: HttpClient, private globalService: GlobalService) { 
  }
  ruta= this.globalService.var_ruta_prod;
 
  getProgramas(parametro: any): any {
   const url =this.ruta+'get_programas_modulo';
     const body = { "modulo": parametro };
     return this.http.post(url, body);
 }
}
