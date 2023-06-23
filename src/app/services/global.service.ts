import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  //public var_ruta_prod ="http://35.231.9.84:8091/scriptcase/app/CCC/ws_pme/?";
  public var_ruta_prod  = "https://bodecom.com/ccc/ws_pme/?";
  constructor(private router: Router, private http: HttpClient) { }

ruta: any= [];


  get_contenidoWeb_modulo(parametro: any): any {
    const url =this.var_ruta_prod+'get_contenidoWeb_modulo';
    const body = { "modulo": parametro };
    return this.http.post(url, body);
  }

  get_subModulos(parametro: any): any {
    const url =this.var_ruta_prod+'get_subModulos_modulo';
    const body = { "modulo": parametro };
    return this.http.post(url, body);
  }
  get_contenidoWeb_subModulo(parametro: any): any {
    const url =this.var_ruta_prod+'get_contenidoWeb_subModulo';
    const body = { "oid_subModulo": parametro };
    return this.http.post(url, body);
  }

}

