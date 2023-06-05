import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';


@Injectable({
  providedIn: 'root'
})
export class DetalleCompetitividadRegionalService {

  url= this.globalService.var_ruta_prod;
  constructor(private http: HttpClient, private globalService: GlobalService) { }

  get_detalle_competitividad(parametro: any): any {
    const body = { "oidcompetitividad": parametro };
    return this.http.post(this.url+'get_competitividad_detalle', body);
  }
}
