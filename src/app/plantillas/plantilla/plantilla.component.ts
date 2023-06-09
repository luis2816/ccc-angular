import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IconMenuComponent } from 'src/app/components/componentes/icon-menu/icon-menu.component';
import { MainSliderComponent } from 'src/app/components/componentes/main-slider/main-slider.component';
import { SwiperEventosComponent } from 'src/app/components/componentes/swiper-eventos/swiper-eventos.component';
import { DynamicComponentDirective } from 'src/app/directive/dynamic-component.directive';

const Componentes = [
  {
    component: MainSliderComponent
  },
  {
    component: IconMenuComponent
  }
];

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.css']
})
export class PlantillaComponent implements OnInit {


  @ViewChild(DynamicComponentDirective, { static: true }) dynamic!: DynamicComponentDirective;
  idx = 0;

  constructor(private route: ActivatedRoute, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.generateComponent();
  }

  generateComponent(): void {
    const viewContainerRef = this.dynamic.viewContainerRef;
    viewContainerRef.clear();

    const bannerCount = Componentes.length;
    let currentIdx = 0;

    const intervalId = setInterval(() => {
      const banner = Componentes[currentIdx];
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory<any>(banner.component);
      const componentRef = viewContainerRef.createComponent<any>(componentFactory);

      currentIdx = (currentIdx + 1) % bannerCount;

      if (currentIdx === 0) {
        clearInterval(intervalId);
      }
    }, 200); // Cambia el valor del intervalo según tus necesidades
  }
}
