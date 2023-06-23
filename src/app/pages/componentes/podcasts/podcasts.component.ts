import { SwiperPrensaService } from './../../../components/componentes/swiper-prensa/service/swiper-prensa.service';
import Swiper from 'swiper';
import { PodcastService } from './services/podcast.service';
import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.css']
})
export class PodcastsComponent implements OnInit, AfterViewInit{

   listaPodcast: any=[];
   listaEspeciales: any=[];
   listaComunicadosPrensa: any=[];
   podcastSeleccionado: any =[];
   modalVisible = false;

  constructor(private swiperPrensaService: SwiperPrensaService,  private elementRef: ElementRef ) {}

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    const slidesPerView_1 = new Swiper(this.elementRef.nativeElement.querySelector('.slidesPerView-1'), {
      slidesPerView: 1,           
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    const slidesPerView_3 = new Swiper(this.elementRef.nativeElement.querySelector('.slidesPerView-3'), {
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
    const especiales = new Swiper(this.elementRef.nativeElement.querySelector('#especiales .swiper'), {
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

    const podcast= new Swiper(this.elementRef.nativeElement.querySelector('#podcast .swiper'), {
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
              slidesPerView: 4,
              spaceBetween: 20,
            }
          }
    });
  }
}
