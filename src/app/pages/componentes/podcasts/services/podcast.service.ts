import { GlobalService } from 'src/app/services/global.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PodcastService {

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
}
