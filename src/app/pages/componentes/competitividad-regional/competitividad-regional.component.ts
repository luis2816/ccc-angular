import { CompetitividadRegionalService } from './service/competitividad-regional.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competitividad-regional',
  templateUrl: './competitividad-regional.component.html',
  styleUrls: ['./competitividad-regional.component.css']
})
export class CompetitividadRegionalComponent implements OnInit {
  
   listaTiposCompetitividad: any = [];
  constructor(private competitividadRegionalService : CompetitividadRegionalService){}
  ngOnInit(): void {

      this.competitividadRegionalService.getTiposcompetitividadRegional()
     .subscribe((response: any) => this.listaTiposCompetitividad = response.lista_competitividad );
  }

  enviarDato(dato: number) {
    // El valor que deseas enviar
     this.competitividadRegionalService.setoidCompetitividad(dato);
   }

 
}
