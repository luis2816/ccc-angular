import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from 'src/app/services/global.service';
@Injectable({
  providedIn: 'root'
})
export class ConvocatoriasService {

  constructor(private http: HttpClient, private globalService: GlobalService) { }

   url= this.globalService.var_ruta_prod;
  getOfertas(): any {
    const url = this.url+'get_ofertas';
    return this.http.get(url);
  }
}
