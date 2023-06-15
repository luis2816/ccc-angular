import { EventosService } from './../../../pages/componentes/eventos/services/eventos.service';
import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { SwiperEventoService } from './../swiper-eventos/services/swiper-evento.service';


@Component({
  selector: 'app-swiper-slide-eventos',
  templateUrl: './swiper-slide-eventos.component.html',
  styleUrls: ['./swiper-slide-eventos.component.css']
})
export class SwiperSlideEventosComponent implements OnInit, AfterViewInit {
  eventos: any = [];
  constructor(private  swiperEventoService: SwiperEventoService,
               private elementRef: ElementRef,
              private  eventosService: EventosService
               ){}

  ngOnInit(): void {
     //Se obtiene todos los eventos por medio de un servicio y se guarda en la variable eventos
     this.swiperEventoService.getEventos(3)
     .subscribe((response: any) => this.eventos= response.eventos);
}
ngAfterViewInit(): void {
  const NoticiasSwiper = new Swiper(this.elementRef.nativeElement.querySelector('#Eventos .swiper'), {
    spaceBetween: 40,
    slidesPerView: 1,
    freeMode: {
        enabled: true,
        sticky: true,
    },            
    pagination: false,
    breakpoints: {
          567: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          }
        }
  });
}

enviarDato(dato: number) {
  // El valor que deseas enviar
   this.eventosService.setoidEvento(dato);
   console.log(dato);
 }

}
