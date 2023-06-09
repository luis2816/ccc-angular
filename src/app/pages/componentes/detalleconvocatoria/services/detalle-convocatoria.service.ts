import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from 'src/app/services/global.service';

@Injectable({
  providedIn: 'root'
})
export class DetalleConvocatoriaService {

  constructor(private http: HttpClient, private globalService: GlobalService) { }
  ruta = this.globalService.var_ruta_prod;

  get_detalle_oferta(parametro: any): any {
    const url =this.ruta+'get_ofertas_detalle';
    const body = { "oidoferta": parametro };
    return this.http.post(url, body);
  }

  enviar_oferta(parametro: any): any {
    const url ='https://bodecom.com/ccc/ws_pme/?get_registroOferta';
    console.log(JSON.stringify(parametro))
    return this.http.post(url, JSON.stringify(parametro));
  }

  listar_departamentos(){
    const url =this.ruta+'get_depto_ciudad';
    return this.http.get(url);
  }

  listar_tipoDocumento(){
    const url =this.ruta+'o_get_tipo_identificacion';
    return this.http.get(url);
  }

listar_tiposFormacionacademica(){
    const url =this.ruta+'o_get_formacion_academica';
    return this.http.get(url);
  }
}
