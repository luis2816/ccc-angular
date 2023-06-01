import { Component, AfterViewInit, ElementRef, Input} from '@angular/core';
import { InicioService } from 'src/app/pages/componentes/inici/services/inicio.service';
import Swiper from 'swiper';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements  AfterViewInit  {
  @Input() noticias: any= [];
  @Input() tituloNoticias : any = String;

  constructor(private inicioService: InicioService, private elementRef: ElementRef){
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
