import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { SwiperPrensaService } from './service/swiper-prensa.service';

@Component({
  selector: 'app-swiper-prensa',
  templateUrl: './swiper-prensa.component.html',
  styleUrls: ['./swiper-prensa.component.css']
})
export class SwiperPrensaComponent implements AfterViewInit, OnInit {
  listaComunicadosPrensa: any=[];
  podcastSeleccionado: any =[];
  @Input() tipoPodcast: string | undefined;
  @Input() titulo: string | undefined;


  constructor(private swiperPrensaService: SwiperPrensaService,  private elementRef: ElementRef) {}

  ngOnInit(): void {
    
   //Obtenemos la lista de podcast tipo comunicados de prensa
   this.swiperPrensaService.get_podcast_tipo(this.tipoPodcast)
   .subscribe((response: any) => this.listaComunicadosPrensa= response.lista_podcast);

  
  }

  ngAfterViewInit(): void {
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
  }

  enviarDato(dato: Number) {
    // El valor que deseas enviar
     this.swiperPrensaService.setoidPrensa(dato);
     console.log(dato);
   }


}
