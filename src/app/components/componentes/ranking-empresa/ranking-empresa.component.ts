import { RankingEmpresaService } from './services/ranking-empresa.service';
import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Ranking } from './modelo-ranking';

@Component({
  selector: 'app-ranking-empresa',
  templateUrl: './ranking-empresa.component.html',
  styleUrls: ['./ranking-empresa.component.css']
})
export class RankingEmpresaComponent implements OnInit, AfterViewInit {

  lista_ranking: Ranking[] =[];
constructor(private elementRef: ElementRef, private rankingEmpresaService: RankingEmpresaService){}
  ngOnInit(): void {
        //Se obtiene todos los ranking de empresa
        this.rankingEmpresaService.getRankings()
        .subscribe((response: any) => this.lista_ranking= response.lista_ranking_empresas);
  }
  ngAfterViewInit(): void {
    const rankingSwiper = new Swiper(this.elementRef.nativeElement.querySelector('#Ranking .swiper'), {
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

  filtrarServicio(evento: any) {
    const texto = evento.target.value;
    let rankingFiltrados:Ranking[] = [];
  
    if (texto.trim() === '') {
      // Si el texto está vacío, muestra todas los servicios
       //Se obtiene todos los servicio  por medio de un servicio y se guarda en la variable lista_serviciosVirtuales
     //Se obtiene todos los ranking de empresa
     this.rankingEmpresaService.getRankings()
     .subscribe((response: any) => this.lista_ranking= response.lista_ranking_empresas);
    } else {
      // Realiza la lógica de filtrado en base al texto ingresado
      rankingFiltrados = this.lista_ranking.filter(ranking => ranking.titulo.includes(texto));
    }
  
    this.lista_ranking = rankingFiltrados;
  }

}
