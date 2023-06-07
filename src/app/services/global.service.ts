import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  //public var_ruta_prod ="http://35.231.9.84:8091/scriptcase/app/CCC/ws_pme/?";
  public var_ruta_prod  = "https://bodecom.com/ccc/ws_pme/?";
  constructor() { }

}
