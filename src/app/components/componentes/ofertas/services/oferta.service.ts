import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  private oidOferta: any;

  constructor() { }

setoidOferta(valor: any) {
    this.oidOferta = valor;
}

getoidOferta() {
    return this.oidOferta;
}
}
