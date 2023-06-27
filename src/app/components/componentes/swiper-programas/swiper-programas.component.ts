import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { SwiperProgramasService } from './services/swiper-programas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-swiper-programas',
  templateUrl: './swiper-programas.component.html',
  styleUrls: ['./swiper-programas.component.css']
})
export class SwiperProgramasComponent implements OnInit, AfterViewInit {

  currentPath: any;


  listaProgramas: any = [];
  constructor(private elementRef: ElementRef, private swiperProgramasService: SwiperProgramasService,  private route: ActivatedRoute){
  }
  ngOnInit(): void {
   //Se obtinene todas las noticias
   //Obtenemos la ruta
   this.currentPath  = this.route.snapshot?.routeConfig?.path;
   console.log(this.currentPath);
   this.swiperProgramasService.getProgramas(this.currentPath)
   .subscribe((response: any) => this.listaProgramas=response.lista_programas);
  }

  ngAfterViewInit(): void {
    const programaSwiper = new Swiper(this.elementRef.nativeElement.querySelector('#programas .swiper'), {
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
