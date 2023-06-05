import { Component, OnInit, ViewChild } from '@angular/core';
import { OfertaService } from 'src/app/components/componentes/ofertas/services/oferta.service';
import { DetalleConvocatoriaService } from './services/detalle-convocatoria.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-detalleconvocatoria',
  templateUrl: './detalleconvocatoria.component.html',
  styleUrls: ['./detalleconvocatoria.component.css']
})
export class DetalleconvocatoriaComponent implements OnInit {


  //Datos del formulario
  formulario = {
    oidoferta: 0,
    tipoIdentificacion: '',
    nombre: '',
    edad: '',
    apellido: '',
    anoNacimiento: '',
    tipoAcademia: '',
    tipoFormacion: '',
    experienciaLaboral: '',
    email: '',
    direccion: '',
    departamento: '',
    municipio: '',
    telefono: '',
    wassap: '',

  };

  @ViewChild('formularioRef', { static: false }) formularioRef!: NgForm;

  //bandera para ocultar o mostrar el formulario
  banderaFormulario = false;
  //Bandera para ocultar mostrar el boton de postularme
  banderaBoton = false;
  oferta: any = [];
  oidOfertalocal: any = Number;
  oidOferta: any = Number;
  constructor(private ofertaService: OfertaService, private detalleofertaService: DetalleConvocatoriaService) { }

  ngOnInit(): void {

    //obtenemos la varible guardada en el localStorage
    this.oidOfertalocal = localStorage.getItem('oidOferta');
    //Obtenemos el oidEvento enviado desde el compoenente de eventos
    this.oidOferta = this.ofertaService.getoidOferta();
    if (this.oidOferta != null) {
      localStorage.setItem('oidOferta', this.oidOferta);
      //Obtenemos el detalle del evento
      this.detalleofertaService.get_detalle_oferta(this.oidOferta)
        .subscribe((response: any) => this.oferta = response.detalle_ofertas);

    } else {
      //Obtenemos el detalle del evento
      this.detalleofertaService.get_detalle_oferta(this.oidOfertalocal)
        .subscribe((response: any) => this.oferta = response.detalle_ofertas);
    }

  }

  mostrarFormulario() {
    this.banderaFormulario = !this.banderaFormulario;
    console.log(this.banderaFormulario);
    this.banderaBoton = !this.banderaBoton;
  }

  ocultarBoton() {
    this.banderaBoton = !this.banderaBoton;
    this.banderaFormulario = !this.banderaFormulario;
  }

  enviarFormulario() {

    if(this.oidOferta!=null){
      this.formulario.oidoferta = this.oidOferta;
    }else{
      this.formulario.oidoferta = this.oidOfertalocal;
    }
    console.log(this.formulario);
    // Realizar la petición POST al servidor
    this.detalleofertaService.enviar_oferta(this.formulario).subscribe(
      (response: any) => {
        console.log('Éxito:', response);
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'El formulario se envió exitosamente.',
        });
        this.formularioRef.reset();
        this.banderaFormulario = !this.banderaFormulario;
      },
      (error: any) => {
        console.error('Error:', error);
        // Aquí puedes agregar código adicional para manejar el error
      }
    );
  }



}