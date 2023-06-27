import { Component, ElementRef, OnInit } from '@angular/core';
import { SwiperObjetivosService } from './services/swiper-objetivos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-swiper-objetivos',
  templateUrl: './swiper-objetivos.component.html',
  styleUrls: ['./swiper-objetivos.component.css']
})
export class SwiperObjetivosComponent implements OnInit {

  currentPath: any;


  listaObjetivos: any = [];
  constructor(private elementRef: ElementRef, private swiperObjetivosService: SwiperObjetivosService,  private route: ActivatedRoute){
  }
  ngOnInit(): void {
   //Se obtinene todas las noticias
   //Obtenemos la ruta
   this.currentPath  = this.route.snapshot?.routeConfig?.path;
   console.log(this.currentPath);
   this.swiperObjetivosService.getObjetivos(this.currentPath)
   .subscribe((response: any) => this.listaObjetivos=response.lista_objetivos);
  }
}
