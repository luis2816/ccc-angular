import { GlobalService } from 'src/app/services/global.service';
import { Component, AfterViewInit, ElementRef, OnInit  } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-programa-aliado-plus',
  templateUrl: './programa-aliado-plus.component.html',
  styleUrls: ['./programa-aliado-plus.component.css']
})
export class ProgramaAliadoPlusComponent implements AfterViewInit, OnInit {

   contenidoWeb: any= [];
   constructor(private elementRef: ElementRef, private globalService: GlobalService) { }
   ngOnInit(): void {
     //Obtener el contenido web de la pagina competitividad-regional
     this.globalService.get_contenidoWeb_modulo('programa-alido-plus')
     .subscribe((response: any) => this.contenidoWeb = response.contenidoWeb );
  }

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
