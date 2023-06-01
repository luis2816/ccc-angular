import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { NoticiasComponent } from './components/componentes/noticias/noticias.component';
import { NavComponent } from './components/componentes/nav/nav.component';
import { OfertasComponent } from './components/componentes/ofertas/ofertas.component';
import { CardSideImgComponent } from './components/componentes/card-side-img/card-side-img.component';
import { BlockButtonComponent } from './components/componentes/block-button/block-button.component';
import { SwiperEventosComponent } from './components/componentes/swiper-eventos/swiper-eventos.component';
import { EventosComponent } from './pages/componentes/eventos/eventos.component';
import { CardEventoComponent } from './components/componentes/card-evento/card-evento.component';
import { DetalleEventoComponent } from './pages/componentes/detalle-evento/detalle-evento.component';


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
    NoticiasComponent,
    NavComponent,
    OfertasComponent,
    CardSideImgComponent,
    BlockButtonComponent,
    SwiperEventosComponent,
    EventosComponent,
    CardEventoComponent,
    DetalleEventoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    HttpClientModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
