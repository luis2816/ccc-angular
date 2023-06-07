import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-icon-menu',
  templateUrl: './icon-menu.component.html',
  styleUrls: ['./icon-menu.component.css']
})
export class IconMenuComponent implements OnInit, AfterViewInit {
  iconos = [
    {
      imagen: '../../../../assets/icons/renovacion-mercantil.svg',
      titulo: 'Renovación mercantil',
      link: '/renovacion-mercantil',
    },
    {
      imagen: '../../../../assets/icons/servicios-virtuales.svg',
      titulo: 'Servicios Virtuales',
      link: '/servicios-virtuales',
    },
    {
      imagen: '../../../../assets/icons/aliado-plus.svg',
      titulo: 'Aliado Plus',
      link: '/programa-aliado-plus',
    },
    {
      imagen: '../../../../assets/icons/convocatorias.svg',
      titulo: 'Convocatorias',
      link: '/convocatorias',
    },
    {
      imagen: '../../../../assets/icons/servicios.svg',
      titulo: 'Servicios',
      link: '/servicios',
    },
    {
      imagen: '../../../../assets/icons/programa-ingenia.svg',
      titulo: 'Programa Ingenia',
      link: '/programa-ingenia',
    },

  ]

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const mainSwiper = new Swiper(this.elementRef.nativeElement.querySelector('#IconMenu .swiper'), {
      spaceBetween: 30,
      slidesPerView: 2,
      freeMode: {
        enabled: true,
        sticky: true,
      },
      breakpoints: {
        567: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 6,
        }
      }
    });
  }
}
