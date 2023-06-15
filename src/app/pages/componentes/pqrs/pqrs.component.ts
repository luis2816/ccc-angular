import { Component } from '@angular/core';

@Component({
  selector: 'app-pqrs',
  templateUrl: './pqrs.component.html',
  styleUrls: ['./pqrs.component.css']
})
export class PqrsComponent {
  forms = [
    {
      imagen: '../../../../assets/icons/peticion.svg',
      titulo: 'Petición',
      subtitulo: 'Envía una petición o un derecho de petición.',
      descripcion: 'Es el derecho fundamental que tiene toda persona a presentar solicitudes respetuosas a las autoridades por motivos de interés general o particular y a obtener su pronta resolución.',
      textoBtn:'Envía una petición o un derecho de petición',
      link: '/pqrs-formulario',
      type: 'petición'
    },
    {
      imagen: '../../../../assets/icons/queja.svg',
      titulo: 'Queja',
      subtitulo: 'Envía una queja',
      descripcion: 'Es la manifestación de protesta, censura, descontento o inconformidad que formula una persona en relación con una conducta que considera irregular de uno o varios servidores públicos en desarrollo de sus funciones.',
      textoBtn:'Envía una queja',
      link: '/pqrs-formulario',
      type: 'queja'
    },
    {
      imagen: '../../../../assets/icons/reclamo.svg',
      titulo: 'Reclamo',
      subtitulo: 'Envía un reclamo',
      descripcion: 'Es el derecho que tiene toda persona de exigir, reivindicar o demandar una solución, ya sea por motivo general o particular, referente a la presentación indebida de un servicio o a la falta de atención de una solicitud.',
      textoBtn:'Envía un reclamo',
      link: '/pqrs-formulario',
      type: 'reclamo'
    },
    {
      imagen: '../../../../assets/icons/sugerencia.svg',
      titulo: 'Sugerencia',
      subtitulo: 'Envía una sugerencia',
      descripcion: 'Es la manifestación de una idea o propuesta para mejorar el servicio o la gestión de la entidad.',
      textoBtn:'Envía una sugerencia',
      link: '/pqrs-formulario',
      type: 'sugerencia'
    },
    {
      imagen: '../../../../assets/icons/felicitacion.svg',
      titulo: 'Felicitación',
      subtitulo: 'Envía una felicitación',
      descripcion: 'Es la manifestación de la alegría y satisfacción de un servicio brindado o la gestión de la entidad.',
      textoBtn:'Envía una felicitación',
      link: '/pqrs-formulario',
      type: 'felicitación'
    },
    {
      imagen: '../../../../assets/icons/denuncia.svg',
      titulo: 'Denuncia',
      subtitulo: 'Envía una denuncia',
      descripcion: 'Es la puesta en conocimiento ante una autoridad competenten de una conducta posiblemente irregular, para que se adelante la correspondiente investigación penal, disciplinaria, fiscal, administrativa - sancionatoria o ético profesional.',
      textoBtn:'Envía una denuncia',
      link: '/pqrs-formulario',
      type: 'denuncia'
    },
    {
      imagen: '../../../../assets/icons/solicitud-informacion.svg',
      titulo: 'Solicitud de información',
      subtitulo: 'Solicita información',
      descripcion: 'Petición formulada para acceder a información pública, sin necesidad de que los solicitantes acrediten su personalidad, el tipo de interés, las causas por las cuáles presentan su solicitud o los fines a los cuales habrán de destinar los datos solicitados.',
      textoBtn:'Solicita información',
      link: '/pqrs-formulario',
      type: 'información'
    },
    {
      imagen: '../../../../assets/icons/solicitud-datos-personales.svg',
      titulo: 'Solicitud de datos personales',
      subtitulo: 'Solicita datos personales',
      descripcion: 'Es la solicitud de cambio y/o eliminación de información correspondiente a los datos personales del usuario que requieran correcciones o actualizaciones.',
      textoBtn:'Envía una solicitud',
      link: '/pqrs-formulario',
      type: 'datos-personales'
    },
    {
      imagen: '../../../../assets/icons/agenda-tu-cita.svg',
      titulo: 'Agenda tu cita',
      subtitulo: 'Agenda tu cita',
      descripcion: 'Reunión de tipo presencial o virtual en caso de tener necesidad de realizar un trámite.',
      textoBtn:'Agendar cita',
      link: '/pqrs-formulario',
      type: 'agendar-cita'
    },
  ]
}
