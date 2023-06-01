import { Component, AfterViewInit, ElementRef } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-programa-ingenia',
  templateUrl: './programa-ingenia.component.html',
  styleUrls: ['./programa-ingenia.component.css']
})
export class ProgramaIngeniaComponent implements AfterViewInit {

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {


    const OfertasSwiper = new Swiper(this.elementRef.nativeElement.querySelector('#Eventos .swiper'), {
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
}
