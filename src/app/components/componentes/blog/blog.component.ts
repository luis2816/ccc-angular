import { BlogService } from './services/blog.service';
import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements AfterViewInit, OnInit {

  listaBlogs: any = [];
  constructor(private elementRef: ElementRef, private blogService: BlogService){
  }
  ngOnInit(): void {
   //Se obtinene todas las noticias
   this.blogService.getBlogs()
   .subscribe((response: any) => this.listaBlogs= response.listaBlogs);
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
