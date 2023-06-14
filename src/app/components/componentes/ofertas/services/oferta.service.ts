import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  private oidOferta: any;

  url = this.globalService.var_ruta_prod;
  constructor(private http: HttpClient, private globalService: GlobalService) { }

  setoidOferta(valor: any) {
    this.oidOferta = valor;
  }

  getoidOferta() {
    return this.oidOferta;
  }

  getOfertas(): any {
    const url = this.url+'get_ofertas';
    return this.http.get(url);
  }
}
