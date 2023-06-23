import { Component, Input, OnInit } from '@angular/core';
import { SwiperPrensaService } from '../swiper-prensa/service/swiper-prensa.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  itemSeleccionado: any= Number;
  listaItems: any= [];


  constructor(private swiperPrensaService: SwiperPrensaService){}

  ngOnInit(): void {
    //Obtenemos el detalle de un podcast
    this.swiperPrensaService.get_podcast_oid(1)
    .subscribe((response: any) => this.listaItems=response.detalle_podcast); 
  }


}
