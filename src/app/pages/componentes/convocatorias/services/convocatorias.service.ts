import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConvocatoriasService {

  constructor(private http: HttpClient) { }

  getOfertas(): any {
    const url = 'http://35.231.9.84:8091/scriptcase/app/CCC/ws_pme/?get_ofertas';
    return this.http.get(url);
  }
}
