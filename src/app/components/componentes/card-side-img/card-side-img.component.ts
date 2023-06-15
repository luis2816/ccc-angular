import { SwiperNoticiaService } from './../swiper-noticia/services/swiper-noticia.service';
import { Component, Input, OnInit } from '@angular/core';
import { CardSideImgService } from './services/card-side-img.service';


@Component({
  selector: 'app-card-side-img',
  templateUrl: './card-side-img.component.html',
  styleUrls: ['./card-side-img.component.css']
})
export class CardSideImgComponent implements OnInit  {
  @Input() titulo: string | undefined;
  showMore: boolean = false;


  destacados: any=[];
  constructor(private cardSideImgService: CardSideImgService, private swiperNoticiaService: SwiperNoticiaService){}

  ngOnInit(): void {
       //Se obtiene todos las noticias destacadas 
       this.cardSideImgService.getDestacados()
       .subscribe((response: any) => this.destacados= response.noticias_destacadas);
  }

  enviaroidNoticia(dato: number) {
    // El valor que deseas enviar
     this.swiperNoticiaService.setoidNoticia(dato);
   }

}
