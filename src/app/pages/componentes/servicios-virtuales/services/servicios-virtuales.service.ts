import { GlobalService } from './../../../../services/global.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciosVirtualesService {

  constructor(private http: HttpClient, private globalService: GlobalService) { }

  ruta=this.globalService.var_ruta_prod;
  getNoticias(): any {
    const url =this.ruta+'get_noticias';
    return this.http.get(url);
  }
}

