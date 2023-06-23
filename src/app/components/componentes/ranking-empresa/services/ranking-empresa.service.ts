import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Injectable({
  providedIn: 'root'
})
export class RankingEmpresaService {

  constructor(private http: HttpClient, private globalService: GlobalService) { }

  url=this.globalService.var_ruta_prod;

  getRankings(): any {
    const url =this.url+'get_ranking_empresas';
    return this.http.get(url);
  }
}
