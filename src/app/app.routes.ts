import { RouterModule, Routes } from "@angular/router";
import { IniciComponent } from "./pages/componentes/inici/inici.component";
import { CompetitividadRegionalComponent } from "./pages/componentes/competitividad-regional/competitividad-regional.component";
import { ConvocatoriasComponent } from "./pages/componentes/convocatorias/convocatorias.component";
import { InformaionEconomicaComponent } from "./pages/componentes/informaion-economica/informaion-economica.component";
import { ProgramaAliadoPlusComponent } from "./pages/componentes/programa-aliado-plus/programa-aliado-plus.component";
import { ProgramaIngeniaComponent } from "./pages/componentes/programa-ingenia/programa-ingenia.component";
import { ServiciosVirtualesComponent } from "./pages/componentes/servicios-virtuales/servicios-virtuales.component";
import { EventosComponent } from "./pages/componentes/eventos/eventos.component";
import { DetalleEventoComponent } from "./pages/componentes/detalle-evento/detalle-evento.component";
import { DetalleNoticiaComponent } from "./pages/componentes/detalle-noticia/detalle-noticia.component";
import { DetalleconvocatoriaComponent } from "./pages/componentes/detalleconvocatoria/detalleconvocatoria.component";
import { DetalleCompetitividadRegionalComponent } from "./pages/componentes/detalle-competitividad-regional/detalle-competitividad-regional.component";
import { ServiciosComponent } from "./pages/componentes/servicios/servicios.component";
import { ComercioComponent } from "./pages/componentes/comercio/comercio.component";
import { TransparenciaComponent } from "./pages/componentes/transparencia/transparencia.component";
import { RegistrosPublicosComponent } from "./pages/componentes/registros-publicos/registros-publicos.component";
import { NoticiasComponent } from "./pages/componentes/noticias/noticias.component";
import { PqrsComponent } from "./pages/componentes/pqrs/pqrs.component";
import { PodcastsComponent } from "./pages/componentes/podcasts/podcasts.component";
import { PqrsFormularioComponent } from "./pages/componentes/pqrs-formulario/pqrs-formulario.component";
import { PreguntasFrecuentesComponent } from "./pages/preguntas-frecuentes/preguntas-frecuentes.component";
import { NuestraCamaraComponent } from "./pages/componentes/nuestra-camara/nuestra-camara.component";
import { DetalleServicioVirtualComponent } from "./pages/componentes/detalle-servicio-virtual/detalle-servicio-virtual.component";


const APP_ROUTES: Routes=[

{path:'inicio', component: IniciComponent},
{path:'competitividad-regional', component: CompetitividadRegionalComponent},
{path:'detalle-competitividad-regional', component: DetalleCompetitividadRegionalComponent},
{path:'informacion-economica', component: InformaionEconomicaComponent},
{path:'servicios-virtuales', component: ServiciosVirtualesComponent},
{path:'servicios-virtuales/:solicitud', component: DetalleServicioVirtualComponent},
{path:'servicios', component: ServiciosComponent},
{path:'comercio', component: ComercioComponent},
{path:'transparencia', component: TransparenciaComponent},
{path:'programa-aliado-plus', component: ProgramaAliadoPlusComponent},
{path:'convocatorias', component: ConvocatoriasComponent},
{path:'convocatoria/:solicitud', component: DetalleconvocatoriaComponent},
{path:'programa-ingenia', component: ProgramaIngeniaComponent},
{path:'eventos', component: EventosComponent},
{path:'detalleEvento/:solicitud', component: DetalleEventoComponent},
{path:'detalleNoticia/:solicitud', component: DetalleNoticiaComponent},
{path:'registros-publicos', component: RegistrosPublicosComponent},
{path:'noticias', component: NoticiasComponent},
{path:'pqrs', component: PqrsComponent},
{path:'pqrs-formulario/:solicitud/:subtitulo', component: PqrsFormularioComponent},
{path:'podcast', component: PodcastsComponent},
{path:'preguntas-frecuentes', component: PreguntasFrecuentesComponent},
{path:'nuestra-camara', component: NuestraCamaraComponent},
{path:'atencion-ciudadana', component: NuestraCamaraComponent},
{path:'**', pathMatch: 'full' , redirectTo: 'inicio'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)
