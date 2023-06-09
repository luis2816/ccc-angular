import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//IMPORTANDO RUTAS
import { APP_ROUTING } from './app.routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/componentes/header/header.component';
import { MenuComponent } from './components/componentes/menu/menu.component';
import { FooterComponent } from './components/componentes/footer/footer.component';
import { MainSliderComponent } from './components/componentes/main-slider/main-slider.component';
import { IconMenuComponent } from './components/componentes/icon-menu/icon-menu.component';
import { IniciComponent } from './pages/componentes/inici/inici.component';
import { HttpClientModule } from '@angular/common/http';
import { CompetitividadRegionalComponent } from './pages/componentes/competitividad-regional/competitividad-regional.component';
import { InformaionEconomicaComponent } from './pages/componentes/informaion-economica/informaion-economica.component';
import { ServiciosVirtualesComponent } from './pages/componentes/servicios-virtuales/servicios-virtuales.component';
import { ProgramaAliadoPlusComponent } from './pages/componentes/programa-aliado-plus/programa-aliado-plus.component';
import { ConvocatoriasComponent } from './pages/componentes/convocatorias/convocatorias.component';
import { ProgramaIngeniaComponent } from './pages/componentes/programa-ingenia/programa-ingenia.component';
import { BlogComponent } from './components/componentes/blog/blog.component';
import { NavComponent } from './components/componentes/nav/nav.component';
import { OfertasComponent } from './components/componentes/ofertas/ofertas.component';
import { CardSideImgComponent } from './components/componentes/card-side-img/card-side-img.component';
import { BlockButtonComponent } from './components/componentes/block-button/block-button.component';
import { SwiperEventosComponent } from './components/componentes/swiper-eventos/swiper-eventos.component';
import { EventosComponent } from './pages/componentes/eventos/eventos.component';
import { CardEventoComponent } from './components/componentes/card-evento/card-evento.component';
import { DetalleEventoComponent } from './pages/componentes/detalle-evento/detalle-evento.component';
import { DetalleNoticiaComponent } from './pages/componentes/detalle-noticia/detalle-noticia.component';
import { DetalleconvocatoriaComponent } from './pages/componentes/detalleconvocatoria/detalleconvocatoria.component';
import { DetalleCompetitividadRegionalComponent } from './pages/componentes/detalle-competitividad-regional/detalle-competitividad-regional.component';
import { PlantillaComponent } from './plantillas/plantilla/plantilla.component';
import { ServiciosComponent } from './pages/componentes/servicios/servicios.component';
import { ComercioComponent } from './pages/componentes/comercio/comercio.component';
import { TransparenciaComponent } from './pages/componentes/transparencia/transparencia.component';
import { RegistrosPublicosComponent } from './pages/componentes/registros-publicos/registros-publicos.component';
import { SwiperNoticiaComponent } from './components/componentes/swiper-noticia/swiper-noticia.component';
import { NoticiasComponent } from './pages/componentes/noticias/noticias.component';
import { DynamicComponentDirective } from './directive/dynamic-component.directive';
import { SwiperSlideEventosComponent } from './components/componentes/swiper-slide-eventos/swiper-slide-eventos.component';
import { PqrsComponent } from './pages/componentes/pqrs/pqrs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    MainSliderComponent,
    IconMenuComponent,
    IniciComponent,
    CompetitividadRegionalComponent,
    InformaionEconomicaComponent,
    ServiciosVirtualesComponent,
    ProgramaAliadoPlusComponent,
    ConvocatoriasComponent,
    ProgramaIngeniaComponent,
    BlogComponent,
    NavComponent,
    OfertasComponent,
    CardSideImgComponent,
    BlockButtonComponent,
    SwiperEventosComponent,
    EventosComponent,
    CardEventoComponent,
    DetalleEventoComponent,
    DetalleNoticiaComponent,
    DetalleconvocatoriaComponent,
    DetalleCompetitividadRegionalComponent,
    PlantillaComponent,
    ServiciosComponent,
    ComercioComponent,
    TransparenciaComponent,
    RegistrosPublicosComponent,
    SwiperNoticiaComponent,
    NoticiasComponent,
    DynamicComponentDirective,
    SwiperSlideEventosComponent,
    PqrsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
