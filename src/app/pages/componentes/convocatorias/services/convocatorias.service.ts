import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConvocatoriasService {

  constructor(private http: HttpClient) { }

  getOfertas(): any {
    const url = 'https://bodecom.com/ccc/ws_pme/?get_ofertas';
    return this.http.get(url);
  }
}
