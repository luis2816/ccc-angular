import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainSliderService {

  imagenes =[
    {
      img1: '../../../../assets/images/main-slide-bg-blue.svg',
      img2: '../../../../assets/images/logo-blanco.svg',
      texto1: 'Cauca Nos Mueve',
      texto2: 'Renueva en línea',
      texto3: 'Click aquí',
    },
    {
      img1: '../../../../assets/images/main-slide-bg-green.svg',
      img2: '../../../../assets/images/logo-blanco.svg',
      texto1: 'Cauca Nos Mueve',
      texto2: 'Renueva en línea',
      texto3: 'Click aquí',
     
    },
    {
      img1: '../../../../assets/images/main-slide-bg-blue.svg',
      img2: '../../../../assets/images/logo-blanco.svg',
      texto1: 'Cauca Nos Mueve',
      texto2: 'Renueva en línea',
      texto3: 'Click aquí',
     
    }

  
  ]
  getImagenes(): any[] {
    return this.imagenes;
  }
}
