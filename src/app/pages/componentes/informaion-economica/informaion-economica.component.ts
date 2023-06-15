import { GlobalService } from 'src/app/services/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informaion-economica',
  templateUrl: './informaion-economica.component.html',
  styleUrls: ['./informaion-economica.component.css']
})
export class InformaionEconomicaComponent implements OnInit {
constructor(private globalService: GlobalService){}

  contenidoWeb: any = [];
  ngOnInit(): void {
     //Obtener el contenido web de la pagina competitividad-regional
     this.globalService.get_contenidoWeb_modulo('informacion-economica')
     .subscribe((response: any) => this.contenidoWeb = response.contenidoWeb );
  }

}
