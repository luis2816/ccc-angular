import { Component, AfterViewInit, ElementRef, Input } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-swiper-eventos',
  templateUrl: './swiper-eventos.component.html',
  styleUrls: ['./swiper-eventos.component.css']
})
export class SwiperEventosComponent implements AfterViewInit{
  @Input() eventos: any= [];
  @Input() tituloEventos: any= String;
 
   constructor(private elementRef: ElementRef){
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
