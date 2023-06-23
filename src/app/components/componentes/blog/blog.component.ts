import { BlogService } from './services/blog.service';
import { Component, OnInit, AfterViewInit, ElementRef, Input } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements AfterViewInit, OnInit {

  @Input() modulo: string | undefined;

  listaBlogs: any = [];
  constructor(private elementRef: ElementRef, private blogService: BlogService){
  }
  ngOnInit(): void {
   //Se obtinene todas las noticias
   this.blogService.getBlogs(this.modulo)
   .subscribe((response: any) => this.listaBlogs= response.lista_blog);
  }

  ngAfterViewInit(): void {
    const rblogsSwiper = new Swiper(this.elementRef.nativeElement.querySelector('#blogs .swiper'), {
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
