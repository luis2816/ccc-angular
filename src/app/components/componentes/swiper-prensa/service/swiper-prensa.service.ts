import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Injectable({
  providedIn: 'root'
})
export class SwiperPrensaService {
  oidPrensa: any= Number;
  constructor(private http: HttpClient, private globalService: GlobalService) { }

  url=this.globalService.var_ruta_prod;

  get_podcast_tipo(parametro: any): any {
    const url =this.url+'get_podcast_tipo';
    const body = { "oidTipo": parametro };
    return this.http.post(url, body);
  }
  get_podcast_oid(parametro: any): any {
    const url =this.url+'get_podcast_oid';
    const body = { "oid": parametro };
    return this.http.post(url, body);
  }

  setoidPrensa(valor: any) {
    this.oidPrensa = valor;
  }

  getoidPrensa() {
    return this.oidPrensa;
  }
}
