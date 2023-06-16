import { GlobalService } from 'src/app/services/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transparencia',
  templateUrl: './transparencia.component.html',
  styleUrls: ['./transparencia.component.css']
})
export class TransparenciaComponent implements OnInit {
  contenidoWeb: any = [];
  constructor(private globalService: GlobalService) {}
  ngOnInit(): void {
        //Obtener el contenido web de la pagina competitividad-regional
        this.globalService.get_contenidoWeb_modulo('transparencia')
        .subscribe((response: any) =>this.contenidoWeb=response.contenidoWeb);
  }



}
