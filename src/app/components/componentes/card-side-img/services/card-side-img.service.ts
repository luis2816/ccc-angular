import { GlobalService } from 'src/app/services/global.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardSideImgService {

  constructor(private http: HttpClient, private globalService: GlobalService) { }

  url=this.globalService.var_ruta_prod;

  getDestacados(): any {
    const url =this.url+'get_noticias_destacadas';
    return this.http.get(url);
  }
}
