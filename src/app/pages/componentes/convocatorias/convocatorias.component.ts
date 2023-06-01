import { Component, OnInit, AfterViewInit, ElementRef} from '@angular/core';
import Swiper from 'swiper';
import { ConvocatoriasService } from './services/convocatorias.service';

@Component({
  selector: 'app-convocatorias',
  templateUrl: './convocatorias.component.html',
  styleUrls: ['./convocatorias.component.css']
})
export class ConvocatoriasComponent implements OnInit,AfterViewInit {

constructor(private convocatoriasService: ConvocatoriasService, private elementRef: ElementRef){}

listaOfertas= [];
ngOnInit(): void { 
  //Se obtiene todos las ofertas  por medio de un servicio y se guarda en la variable ofertas
  this.convocatoriasService.getOfertas()
    .subscribe((response: any) => this.listaOfertas= response.lista_ofertas);
}
ngAfterViewInit(): void {


  const OfertasSwiper = new Swiper(this.elementRef.nativeElement.querySelector('#Ofertas .swiper'), {
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

  const otrasOfertasSwiper = new Swiper(this.elementRef.nativeElement.querySelector('#OtrasOfertas .swiper'), {
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
