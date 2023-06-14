import { GlobalService } from './../../../../services/global.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlockButtonService {

  constructor(private http: HttpClient, private globalService: GlobalService) { }
  url=this.globalService.var_ruta_prod;


  getPodcast(): any {
    const url =this.url+'get_podcast';
    return this.http.get(url);
  }
}
