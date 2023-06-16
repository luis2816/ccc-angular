import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-preguntas-frecuentes',
  templateUrl: './preguntas-frecuentes.component.html',
  styleUrls: ['./preguntas-frecuentes.component.css']
})
export class PreguntasFrecuentesComponent  implements OnInit{

  contenidoWeb: any = [];
  constructor(private globalService: GlobalService) {}
  ngOnInit(): void {
        //Obtener el contenido web de la pagina competitividad-regional
        this.globalService.get_contenidoWeb_modulo('preguntas-frecuentes')
        .subscribe((response: any) =>this.contenidoWeb=response.contenidoWeb);
  }
}
