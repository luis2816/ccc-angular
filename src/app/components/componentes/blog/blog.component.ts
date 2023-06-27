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
    var blogSwiper = this.elementRef.nativeElement.querySelector('.blogSwiper');
    if(location.pathname == '/inicio')blogSwiper.classList.add('inicio');
    const home_swParams = {
      slidesPerView: 1,
      freeMode: {
          enabled: true,
          sticky: true,
      },

    }
    Object.assign(blogSwiper, home_swParams);
    blogSwiper.initialize();
  }
}
