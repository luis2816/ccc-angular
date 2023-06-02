import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  private oidEvento: any;


  constructor(private http: HttpClient) { }

  setoidEvento(valor: any) {
    this.oidEvento = valor;
  }

  getoidEvento() {
    return this.oidEvento;
  }
  getEventos(): any {
    const url = 'https://bodecom.com/ccc/ws_pme/?get_eventos';
    return this.http.get(url);
  }

}
