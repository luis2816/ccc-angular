import { GlobalService } from 'src/app/services/global.service';
import { CompetitividadRegionalService } from './service/competitividad-regional.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competitividad-regional',
  templateUrl: './competitividad-regional.component.html',
  styleUrls: ['./competitividad-regional.component.css']
})
export class CompetitividadRegionalComponent implements OnInit {
  
   listaTiposCompetitividad: any = [];
   contenidoWeb: any= [];
  constructor(private competitividadRegionalService : CompetitividadRegionalService, private globalService: GlobalService){}
  ngOnInit(): void {

      this.competitividadRegionalService.getTiposcompetitividadRegional()
     .subscribe((response: any) => this.listaTiposCompetitividad = response.lista_competitividad );

     //Obtener el contenido web de la pagina competitividad-regional
     this.globalService.get_contenidoWeb_modulo('competitividad-regional')
     .subscribe((response: any) => this.contenidoWeb = response.contenidoWeb );

     
  }

  enviarDato(dato: number) {
    // El valor que deseas enviar
     this.competitividadRegionalService.setoidCompetitividad(dato);
   }

 
}
