import { GlobalService } from 'src/app/services/global.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nuestra-camara',
  templateUrl: './nuestra-camara.component.html',
  styleUrls: ['./nuestra-camara.component.css']
})
export class NuestraCamaraComponent implements OnInit {
  lista_subModulos:any=[];
  contenidoWeb: any = [];
  oid_subModulo:Number = 0;
  titulo: any;
  currentPath: any;
  subModuloSeleccionado: any;


  constructor(private globalService: GlobalService, private route: ActivatedRoute){}
  ngOnInit(): void {

    //Obtenemos la ruta
    this.currentPath  = this.route.snapshot?.routeConfig?.path;

     //Obtener los subModulos del modulo  nuestra-camara
     this.globalService.get_subModulos(this.currentPath)
     .subscribe((response: any) => {
       this.lista_subModulos = response.lista_subModulos;
       this.titulo = response.titulo;
     });

  }
  obtenerContenidoWeb(oid: Number, subModulo: string){
  //Obtener los subModulos del modulo  nuestra-camara
  this.oid_subModulo=oid;
  this.subModuloSeleccionado=subModulo;
  this.globalService.get_contenidoWeb_subModulo(oid)
  .subscribe((response: any) => this.contenidoWeb=response.contenidoWeb);
  }


}
