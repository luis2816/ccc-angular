import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PlantillaComponent } from '../plantillas/plantilla/plantilla.component';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  //public var_ruta_prod ="http://35.231.9.84:8091/scriptcase/app/CCC/ws_pme/?";
  public var_ruta_prod  = "https://bodecom.com/ccc/ws_pme/?";
  constructor(private router: Router) { }

ruta: any= [];

  listaRutas= [
      {
        path: 'inicioprueba',
        componente: PlantillaComponent
      }
  ]

  obtenerRutas() {
    this.listaRutas.forEach(ruta => {
      const routeConfig = {
        path: ruta.path,
        component: ruta.componente
      };
      this.router.config.push(routeConfig);
    });

    this.router.config.push({ path: '**', pathMatch: 'full', redirectTo: 'inicio' });

  }
}

