import { Component } from '@angular/core';

@Component({
  selector: 'app-pqrs',
  templateUrl: './pqrs.component.html',
  styleUrls: ['./pqrs.component.css']
})
export class PqrsComponent {
  iconos = [
    {
      imagen: '../../../../assets/icons/peticion.svg',
      titulo: 'Petición',
      descripcion: 'Es el derecho fundamental que tiene toda persona a presentar solicitudes respetuosas a las autoridades por motivos de interés general o particular y a obtener su pronta resolución.',
      textoBtn:'Envía una petición o un derecho de petición',
      link: '/'
    },
    {
      imagen: '../../../../assets/icons/queja.svg',
      titulo: 'Queja',
      descripcion: 'Es la manifestación de protesta, censura, descontento o inconformidad que formula una persona en relación con una conducta que considera irregular de uno o varios servidores públicos en desarrollo de sus funciones.',
      textoBtn:'Envía una queja',
      link: '/'
    },
    {
      imagen: '../../../../assets/icons/reclamo.svg',
      titulo: 'Reclamo',
      descripcion: 'Es el derecho que tiene toda persona de exigir, reivindicar o demandar una solución, ya sea por motivo general o particular, referente a la presentación indebida de un servicio o a la falta de atención de una solicitud.',
      textoBtn:'Envía un reclamo',
      link: '/'
    },
    {
      imagen: '../../../../assets/icons/sugerencia.svg',
      titulo: 'Sugerencia',
      descripcion: 'Es la manifestación de una idea o propuesta para mejorar el servicio o la gestión de la entidad.',
      textoBtn:'Envía una sugerencia',
      link: '/'
    },
    {
      imagen: '../../../../assets/icons/felicitacion.svg',
      titulo: 'Felicitación',
      descripcion: 'Es la manifestación de la alegría y satisfacción de un servicio brindado o la gestión de la entidad.',
      textoBtn:'Envía una felicitación',
      link: '/'
    },
    {
      imagen: '../../../../assets/icons/denuncia.svg',
      titulo: 'Denuncia',
      descripcion: 'Es la puesta en conocimiento ante una autoridad competenten de una conducta posiblemente irregular, para que se adelante la correspondiente investigación penal, disciplinaria, fiscal, administrativa - sancionatoria o ético profesional.',
      textoBtn:'Envía una denuncia',
      link: '/'
    },
    {
      imagen: '../../../../assets/icons/solicitud-informacion.svg',
      titulo: 'Solicitud de información',
      descripcion: 'Petición formulada para acceder a información pública, sin necesidad de que los solicitantes acrediten su personalidad, el tipo de interés, las causas por las cuáles presentan su solicitud o los fines a los cuales habrán de destinar los datos solicitados.',
      textoBtn:'Solicita información',
      link: '/'
    },
    {
      imagen: '../../../../assets/icons/solicitud-datos-personales.svg',
      titulo: 'Solicitud de datos personales',
      descripcion: 'Es la solicitud de cambio y/o eliminación de información correspondiente a los datos personales del usuario que requieran correcciones o actualizaciones.',
      textoBtn:'Envía una solicitud',
      link: '/'
    },
    {
      imagen: '../../../../assets/icons/agenda-tu-cita.svg',
      titulo: 'Agenda tu cita',
      descripcion: 'Reunión de tipo presencial o virtual en caso de tener necesidad de realizar un trámite.',
      textoBtn:'Agendar cita',
      link: '/'
    },
  ]
}
