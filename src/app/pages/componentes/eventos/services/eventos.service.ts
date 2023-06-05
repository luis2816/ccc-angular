import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from 'src/app/services/global.service';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  private oidEvento: any;
  url = this.globalService.var_ruta_prod;


  constructor(private http: HttpClient, private globalService : GlobalService) { }


  setoidEvento(valor: any) {
    this.oidEvento = valor;
  }

  getoidEvento() {
    return this.oidEvento;
  }
  getEventos(): any {
    return this.http.get(this.url+'get_eventos');
  }

}
