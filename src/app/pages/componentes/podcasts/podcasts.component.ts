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

  constructor(private podcastService: PodcastService,  private elementRef: ElementRef ) {}

  ngOnInit(): void {
    
    //Obtenemos la lista de podcast tipo podcast
    this.podcastService.get_podcast_tipo(1)
      .subscribe((response: any) => this.listaPodcast= response.lista_podcast);

   //Obtenemos la lista de podcast tipo comunicados de prensa
   this.podcastService.get_podcast_tipo(2)
   .subscribe((response: any) => this.listaComunicadosPrensa= response.lista_podcast);

       //Obtenemos la lista de podcast tipo especiales
    this.podcastService.get_podcast_tipo(4)
    .subscribe((response: any) => this.listaEspeciales= response.lista_podcast);

  
  }

  mostrarDetalle(parametro: number) {
    //Obtenemos el detalle de un podcast
   this.podcastService.get_podcast_oid(parametro)
   .subscribe((response: any) => this.podcastSeleccionado= response.detalle_podcast);
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

    const comunicadoPrensa = new Swiper(this.elementRef.nativeElement.querySelector('#comunicados-prensa .swiper'), {
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
