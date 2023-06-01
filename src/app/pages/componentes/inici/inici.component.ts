import { Component, OnInit  } from '@angular/core';
import { InicioService } from './services/inicio.service';

@Component({
  selector: 'app-inici',
  templateUrl: './inici.component.html',
  styleUrls: ['./inici.component.css']
})
export class IniciComponent implements OnInit   {

  //Variables para eventos se declara el parametro 3= eventos
  parametro= 3;
  eventos: any= [];
   //Variables para noticias 
  noticias: any= []

  constructor(private inicioService: InicioService){}

  ngOnInit(): void { 
      //Se obtiene todos los evntos por medio de un servicio y se guarda en la variable eventos
      this.inicioService.getEventos(this.parametro)
        .subscribe((response: any) => this.eventos= response.eventos);
      //Se obtinene todas las noticias
        this.inicioService.getNoticias()
      .subscribe((response: any) => this.noticias= response.noticias);
  }



 
}
