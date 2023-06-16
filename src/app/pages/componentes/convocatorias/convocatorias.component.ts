import { GlobalService } from 'src/app/services/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convocatorias',
  templateUrl: './convocatorias.component.html',
  styleUrls: ['./convocatorias.component.css']
})
export class ConvocatoriasComponent  implements OnInit {
 contenidoWeb: any = [];
constructor(private globalService: GlobalService){}
  ngOnInit(): void {
     //Obtener el contenido web de la pagina competitividad-regional
     this.globalService.get_contenidoWeb_modulo('convocatorias')
     .subscribe((response: any) => this.contenidoWeb = response.contenidoWeb );
  }

}

