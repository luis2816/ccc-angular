import { Injectable } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SwiperNoticiaService {
  private oidNoticia: any;

  constructor(private http: HttpClient, private globalService: GlobalService) { }

  url=this.globalService.var_ruta_prod;
setoidNoticia(valor: any) {
    this.oidNoticia = valor;
}

getoidNoticia() {
    return this.oidNoticia;
}

getNoticias(): any {
  const url =this.url+'get_noticias';
  return this.http.get(url);
}
}
