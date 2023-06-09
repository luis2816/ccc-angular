import { Component, AfterViewInit, ElementRef, Input, OnInit } from '@angular/core';
import { SwiperEventoService } from './services/swiper-evento.service';
import Swiper from 'swiper';

@Component({
  selector: 'app-swiper-eventos',
  templateUrl: './swiper-eventos.component.html',
  styleUrls: ['./swiper-eventos.component.css']
})
export class SwiperEventosComponent implements OnInit, AfterViewInit{
  eventos: any= [];
 
   constructor(private swiperEventoService: SwiperEventoService, private elementRef: ElementRef){
   }
  ngOnInit(): void {
         //Se obtiene todos los evntos por medio de un servicio y se guarda en la variable eventos
         this.swiperEventoService.getEventos(3)
         .subscribe((response: any) => this.eventos= response.eventos);
  }

   ngAfterViewInit(): void {
    const eventosSwiper = new Swiper(this.elementRef.nativeElement.querySelector('#Eventos .swiper'), {
      spaceBetween: 30,
      slidesPerView: 1,
      freeMode: {
          enabled: true,
          sticky: true,
      },            
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      breakpoints: {
        567: {
          slidesPerView: 3,
          spaceBetween: 20,
        }
      }
    });
  }
}
