import { DetalleCompetitividadRegionalService } from './services/detalle-competitividad-regional.service';
import { CompetitividadRegionalService } from './../competitividad-regional/service/competitividad-regional.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-competitividad-regional',
  templateUrl: './detalle-competitividad-regional.component.html',
  styleUrls: ['./detalle-competitividad-regional.component.css']
})
export class DetalleCompetitividadRegionalComponent implements OnInit {

  bandera = false;
  oidCompetitividad: any = Number;
  competitividad: any = [];
  listamenu: any = [];
  constructor(private competitividadRegionalService: CompetitividadRegionalService,
    private detalleCompetitividadRegionalService: DetalleCompetitividadRegionalService) {



  }
  ngOnInit(): void {

    //Obtenemos la lista del menu
    this.competitividadRegionalService.getTiposcompetitividadRegional()
      .subscribe((response: any) => this.listamenu = response.lista_competitividad);

    //obtenemos la varible guardada en el localStorage
    const oidCompetitividadlocal = localStorage.getItem('oidCompetitividad');
    //Obtenemos el oidEvento enviado desde el compoenente de eventos
    this.oidCompetitividad = this.competitividadRegionalService.getoidCompetitividad();

    if (this.oidCompetitividad != null) {
      localStorage.setItem('oidCompetitividad', this.oidCompetitividad);
      //Obtenemos el detalle del evento
      this.detalleCompetitividadRegionalService.get_detalle_competitividad(this.oidCompetitividad)
        .subscribe((response: any) => this.competitividad = response.competitividad_detalle);

    } else {
      //Obtenemos el detalle del evento
      this.detalleCompetitividadRegionalService.get_detalle_competitividad(oidCompetitividadlocal)
        .subscribe((response: any) => this.competitividad = response.competitividad_detalle);
    }
  }

  cambiarOidcompetitividad(oid: Number) {
    this.oidCompetitividad = oid;

    //obtenemos la varible guardada en el localStorage
    const oidCompetitividadlocal = localStorage.getItem('oidCompetitividad');

    if (this.oidCompetitividad != null) {
      localStorage.setItem('oidCompetitividad', this.oidCompetitividad);
      //Obtenemos el detalle de la competitividad seleccionada
      this.detalleCompetitividadRegionalService.get_detalle_competitividad(this.oidCompetitividad)
        .subscribe((response: any) => this.competitividad = response.competitividad_detalle);

    } else {
      //Obtenemos el detalle de la competitividad seleccionada
      this.detalleCompetitividadRegionalService.get_detalle_competitividad(oidCompetitividadlocal)
        .subscribe((response: any) => this.competitividad = response.competitividad_detalle);
    }
  }

}
