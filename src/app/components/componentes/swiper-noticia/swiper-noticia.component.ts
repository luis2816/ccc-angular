import { AfterViewInit, Component, OnInit, ElementRef } from '@angular/core';
import Swiper from 'swiper';
import { SwiperNoticiaService } from './services/swiper-noticia.service';

@Component({
  selector: 'app-swiper-noticia',
  templateUrl: './swiper-noticia.component.html',
  styleUrls: ['./swiper-noticia.component.css']
})
export class SwiperNoticiaComponent implements  AfterViewInit, OnInit {
   //Variables para noticias 
   noticias: any= []
   tituloNoticias= "Noticias";
   noticia: any= [];

  constructor(private swiperNoticiaService: SwiperNoticiaService, private elementRef: ElementRef){
  }

  ngOnInit(): void {
     //Se obtinene todas las noticias
     this.swiperNoticiaService.getNoticias()
     .subscribe((response: any) => this.noticias= response.noticias);
  }


  enviaroidNoticia(dato: number) {
    // El valor que deseas enviar
     this.swiperNoticiaService.setoidNoticia(dato);
   }
  ngAfterViewInit(): void {
    const NoticiasSwiper = new Swiper(this.elementRef.nativeElement.querySelector('#Noticias .swiper'), {
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
