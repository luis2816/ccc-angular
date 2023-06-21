import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';
import { OfertaService } from './services/oferta.service';
import Swiper from 'swiper';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent  implements OnInit,AfterViewInit {


constructor(private ofertaService: OfertaService,  private elementRef: ElementRef){}

@Input() bandera: boolean= true;

listaOfertas: Oferta[] = []; // Inicializa la lista de ofertas como un array vacío de objetos Oferta
listaCompletaOfertas: any[] = [];

ngOnInit(): void { 
  this.ofertaService.getOfertas()
    .subscribe((response: any) => {
      this.listaOfertas = response.lista_ofertas;
      this.listaCompletaOfertas = response.lista_ofertas; // Guardamos la lista completa de ofertas
    });
}

filtrarPorTipo(tipo: string) {
  if (tipo === 'Oferta laboral') {
    // Filtrar la lista de ofertas por tipo de 'Oferta laboral'
    const ofertasFiltradas = this.listaCompletaOfertas.filter(oferta => oferta.nom_convocatoria === 'Oferta laboral');
    this.listaOfertas = ofertasFiltradas;
  } else if (tipo === 'Pasantia') {
    // Filtrar la lista de ofertas por tipo de 'Pasantía'
    const ofertasFiltradas = this.listaCompletaOfertas.filter(oferta => oferta.nom_convocatoria === 'Pasantia');
    this.listaOfertas = ofertasFiltradas;
  } else if (tipo === 'Tarjeta Invitación') {
    // Filtrar la lista de ofertas por tipo de 'Tarjeta Invitación'
    const ofertasFiltradas = this.listaCompletaOfertas.filter(oferta => oferta.nom_convocatoria === 'Tarjeta Invitación');
    this.listaOfertas = ofertasFiltradas;
  } else {
    // Si no se selecciona ninguna opción, mostrar todas las ofertas
    this.listaOfertas = this.listaCompletaOfertas;
  }
}

filtrarOfertas(evento: any) {
  const texto = evento.target.value;
  let ofertasFiltradas:Oferta[] = [];

  if (texto.trim() === '') {
    // Si el texto está vacío, muestra todas las ofertas
     //Se obtiene todos las ofertas  por medio de un servicio y se guarda en la variable ofertas
     this.ofertaService.getOfertas()
    .subscribe((response: any) => this.listaOfertas= response.lista_ofertas);
  } else {
    // Realiza la lógica de filtrado en base al texto ingresado
    ofertasFiltradas = this.listaOfertas.filter(oferta => oferta.titulo.includes(texto));
  }

  // Actualiza la lista de ofertas en el componente <app-ofertas>
  this.listaOfertas = ofertasFiltradas;
}
reemplazarEspacios(titulo: string): string {
  return titulo.replace(/ /g, '-');;
}
ngAfterViewInit(): void {
  const OfertasSwiper = new Swiper(this.elementRef.nativeElement.querySelector('#Ofertas .swiper'), {
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

















enviaroidOferta(dato: number) {
  // El valor que deseas enviar
   this.ofertaService.setoidOferta(dato);
 }
}

// Define una interfaz para el tipo de objeto de las ofertas
interface Oferta {
  oid:number;
  titulo: string;
  ciudad: string;
  fecha_publicacion:string;
  nom_convocatoria:string;
  no_vacantes: number;
  // otras propiedades que puedas tener en las ofertas
}
