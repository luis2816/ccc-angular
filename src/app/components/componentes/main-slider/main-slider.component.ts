import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { MainSliderService } from './services/main-slider.service';
import Swiper from 'swiper';

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
    var mainSwiper = new Swiper(this.elementRef.nativeElement.querySelector('.mainSwiper'), {
      spaceBetween: 0,
      centeredSlides: true,

      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter:true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }


}
