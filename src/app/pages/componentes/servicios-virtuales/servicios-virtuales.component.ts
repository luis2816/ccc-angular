import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { ServiciosVirtualesService } from './services/servicios-virtuales.service';
import { servicio } from './modelo-servicio';
import Swiper from 'swiper';

@Component({
  selector: 'app-servicios-virtuales',
  templateUrl: './servicios-virtuales.component.html',
  styleUrls: ['./servicios-virtuales.component.css']
})
export class ServiciosVirtualesComponent implements OnInit, AfterViewInit   {
  
  lista_serviciosVirtuales: servicio[]=[];
  lista_serviciosVirtuales_destacados: servicio[]=[];
  lista_opcionesServicios: any= [];
  itemsPerPage = 4;
  currentPage = 1;

  constructor(private serviciosVirtualesService: ServiciosVirtualesService,private elementRef: ElementRef){
  }
  ngOnInit(): void { 
    //Se obtiene todos los serviciosVirtuales no destacados
    this.serviciosVirtualesService.getServiciosVirtuales()
    .subscribe((response: any) => {
      this.lista_serviciosVirtuales = response.lista_servicios_virtuales;
      this.lista_opcionesServicios = response.lista_servicios_virtuales;
    });

     //Se obtiene todos los serviciosVirtuales  destacados
     this.serviciosVirtualesService.getServiciosVirtuales_destacados()
     .subscribe((response: any) => {
       this.lista_serviciosVirtuales_destacados = response.lista_servicios_virtuales;});
    
    
  }

getCurrentPageEvents() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.lista_serviciosVirtuales.slice(startIndex, endIndex);
}

getPages() {
    const pageCount = Math.ceil(this.lista_serviciosVirtuales.length / this.itemsPerPage);
    return Array(pageCount).fill(0).map((_, index) => index + 1);
}

goToPage(page: number) {
    this.currentPage = page;
}


  enviarDato(dato: servicio) {
    // El valor que deseas enviar
     this.serviciosVirtualesService.setoidServicio(dato);
   }

  filtrarServicio(evento: any) {
    const texto = evento.target.value;
    let serviciosFiltrados:servicio[] = [];
  
    if (texto.trim() === '') {
      // Si el texto está vacío, muestra todas los servicios
       //Se obtiene todos los servicio  por medio de un servicio y se guarda en la variable lista_serviciosVirtuales
       this.serviciosVirtualesService.getServiciosVirtuales()
      .subscribe((response: any) => this.lista_serviciosVirtuales= response.lista_servicios_virtuales);
    } else {
      // Realiza la lógica de filtrado en base al texto ingresado
      serviciosFiltrados = this.lista_serviciosVirtuales.filter(servicio => servicio.servicio.includes(texto));
    }
  
    // Actualiza la lista de ofertas en el componente <app-ofertas>
    this.lista_serviciosVirtuales = serviciosFiltrados;
  }

  ngAfterViewInit(): void {
    const NoticiasSwiper = new Swiper(this.elementRef.nativeElement.querySelector('#OtrosServicios .swiper'), {
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

