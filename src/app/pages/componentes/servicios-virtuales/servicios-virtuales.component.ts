import { Component, OnInit} from '@angular/core';
import { ServiciosVirtualesService } from './services/servicios-virtuales.service';
@Component({
  selector: 'app-servicios-virtuales',
  templateUrl: './servicios-virtuales.component.html',
  styleUrls: ['./servicios-virtuales.component.css']
})
export class ServiciosVirtualesComponent implements OnInit  {
  

  otrosServicios: any = [];

  constructor(private inicioService: ServiciosVirtualesService){}
  ngOnInit(): void { 
    
    //Se obtinene todos los otros servicios
      this.inicioService.getNoticias()
    .subscribe((response: any) => this.otrosServicios=response.noticias);

  }

}
