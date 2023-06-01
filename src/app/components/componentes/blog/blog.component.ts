import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements AfterViewInit {

  constructor(private elementRef: ElementRef){
  }

  ngAfterViewInit(): void {
    const blogSwiper = new Swiper(this.elementRef.nativeElement.querySelector('#prueba .swiper'), {
      grabCursor: true,
      effect: "creative",
      creativeEffect: {
          prev: {
          shadow: true,
          origin: "left center",
          translate: ["-5%", 0, -200],
          rotate: [0, 100, 0],
          },
          next: {
          origin: "right center",
          translate: ["5%", 0, -200],
          rotate: [0, -100, 0],
          },
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: false,
      },
    });
  }
}
