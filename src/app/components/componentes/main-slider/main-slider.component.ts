import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { MainSliderService } from './services/main-slider.service';
import { register } from 'swiper/element/bundle';
register(); // register Swiper custom elements
@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.css']
})
export class MainSliderComponent  implements OnInit, AfterViewInit {
  imagenes: any[] = [];

  constructor(private mainSliderService: MainSliderService,private elementRef: ElementRef) {}


  ngOnInit(): void {
    this.imagenes = this.mainSliderService.getImagenes();
  }

  ngAfterViewInit(): void {
    var mainSwiper = this.elementRef.nativeElement.querySelector('.mainSwiper');
    const swParams = {
      spaceBetween: 0,
      centeredSlides: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter:true,
      },
      pagination: {
        clickable: false
      },
      injectStyles: [
        `
        .swiper-button-next, .swiper-button-prev{
          color: #fff;
        }
        .swiper-pagination {
          bottom: 4rem !important;
        }
        .swiper-pagination .swiper-pagination-bullet {
          width: 0.8rem;
          height: 0.8rem;
          background: #e4e3e3;
        }
        `,
      ],
    }
    Object.assign(mainSwiper, swParams);
    mainSwiper.initialize();
  }

}