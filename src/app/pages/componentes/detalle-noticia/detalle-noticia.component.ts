import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { NoticiasService } from 'src/app/components/componentes/noticias/services/noticias.service';
import { DetalleNoticiaService } from './services/detalle-noticia.service';
import Swiper from 'swiper';


@Component({
  selector: 'app-detalle-noticia',
  templateUrl: './detalle-noticia.component.html',
  styleUrls: ['./detalle-noticia.component.css']
})
export class DetalleNoticiaComponent implements OnInit, AfterViewInit {
  noticia: any= [];
  noticias: any= [];
  oidNoticia: any= Number ;


constructor(private noticiaService: NoticiasService, 
            private detallenoticiaServices: DetalleNoticiaService,
            private elementRef: ElementRef) {
  
}
obtenerNoticia(oid: number){
  this.noticia=oid;
  localStorage.setItem('oidNoticia', this.noticia);
  this.detallenoticiaServices.get_detalle_noticia(this.noticia)
      .subscribe((response: any) => this.noticia= response.detalle_noticias);
}
ngOnInit() {  

  //Se obtinene todas las noticias
  this.noticiaService.getNoticias()
  .subscribe((response: any) => this.noticias= response.noticias);
 
  //obtenemos la varible guardada en el localStorage
  const oidNoticialocal = localStorage.getItem('oidNoticia');
    //Obtenemos el oid de la noticia  enviado desde el compoenete de noticias
  this.oidNoticia=this.noticiaService.getoidNoticia();

  if(this.oidNoticia!=null){

     // Guardamos el valor en el localStorage
    localStorage.setItem('oidNoticia', this.oidNoticia);
     //Obtenemos el detalle de la noticia
    this.detallenoticiaServices.get_detalle_noticia(this.oidNoticia)
      .subscribe((response: any) => this.noticia= response.detalle_noticias);

  }else{
    this.detallenoticiaServices.get_detalle_noticia(oidNoticialocal)
      .subscribe((response: any) => this.noticia= response.detalle_noticias);
   

  }
 
}

ngAfterViewInit(): void {
  const NoticiasSwiper = new Swiper(this.elementRef.nativeElement.querySelector('#Noticias .swiper'), {
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
