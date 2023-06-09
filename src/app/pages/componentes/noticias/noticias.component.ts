import { Component, OnInit } from '@angular/core';
import { SwiperNoticiaService } from 'src/app/components/componentes/swiper-noticia/services/swiper-noticia.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  noticias:any = [];
  noticia:any=[];
  
  constructor(private swiperNoticiaService: SwiperNoticiaService){}
  ngOnInit(): void {
    this.swiperNoticiaService.getNoticias()
      .subscribe((response: any) => this.noticias= response.noticias);
  }
  enviaroidNoticia(dato: number) {
    // El valor que deseas enviar
     this.swiperNoticiaService.setoidNoticia(dato);
   }

   verDetalle(oid: Number){
   this.swiperNoticiaService.setoidNoticia(oid);
   }

}
