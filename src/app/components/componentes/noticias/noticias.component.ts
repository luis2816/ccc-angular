import { Component, AfterViewInit, ElementRef, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { NoticiasService } from './services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements  AfterViewInit, OnInit {

    //Variables para noticias 
    noticias: any= []
    tituloNoticias= "Noticias";
    noticia: any= [];

 
  constructor(private noticiaService: NoticiasService, private elementRef: ElementRef){
  }

  ngOnInit(): void {
     //Se obtinene todas las noticias
     this.noticiaService.getNoticias()
     .subscribe((response: any) => this.noticias= response.noticias);
  }


  enviaroidNoticia(dato: number) {
    // El valor que deseas enviar
     this.noticiaService.setoidNoticia(dato);
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
