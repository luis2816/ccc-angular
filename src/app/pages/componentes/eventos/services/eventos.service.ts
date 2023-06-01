import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(private http: HttpClient) { }

  getEventos(): any {
    const url = 'https://bodecom.com/ccc/ws_pme/?get_eventos';
    return this.http.get(url);
  }

}
