import { Component, Input } from '@angular/core';
import { OfertaService } from './services/oferta.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent {

@Input() listaOfertas: any = [] ;

constructor(private ofertaService: OfertaService){}

enviaroidOferta(dato: number) {
  // El valor que deseas enviar
   this.ofertaService.setoidOferta(dato);
 }
}
