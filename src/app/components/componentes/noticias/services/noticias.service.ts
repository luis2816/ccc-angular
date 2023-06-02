import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  private oidNoticia: any;

  constructor() { }

setoidNoticia(valor: any) {
    this.oidNoticia = valor;
}

getoidNoticia() {
    return this.oidNoticia;
}
}
