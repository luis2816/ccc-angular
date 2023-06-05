import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Injectable({
  providedIn: 'root'
})
export class CompetitividadRegionalService {
  private oidCompetitividad: any;

  constructor(private http: HttpClient, private globalService : GlobalService) { }

  getTiposcompetitividadRegional(): any {
    const url = this.globalService.var_ruta_prod+'get_competitividad';
    return this.http.get(url);
  }

  setoidCompetitividad(valor: any) {
    this.oidCompetitividad = valor;
  }

  getoidCompetitividad() {
    return this.oidCompetitividad;
  }



}
