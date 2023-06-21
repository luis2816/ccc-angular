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
  itemsPerPage = 4;
  currentPage = 1;
  
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

   getCurrentPageEvents() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.noticias.slice(startIndex, endIndex);
}

getPages() {
    const pageCount = Math.ceil(this.noticias.length / this.itemsPerPage);
    return Array(pageCount).fill(0).map((_, index) => index + 1);
}

goToPage(page: number) {
    this.currentPage = page;
}

reemplazarEspacios(titulo: string): string {
  return titulo.replace(/ /g, '-');;
}

}
