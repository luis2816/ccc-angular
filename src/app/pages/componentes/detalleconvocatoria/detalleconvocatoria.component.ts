import { Component, OnInit, ViewChild } from '@angular/core';
import { OfertaService } from 'src/app/components/componentes/ofertas/services/oferta.service';
import { DetalleConvocatoriaService } from './services/detalle-convocatoria.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-detalleconvocatoria',
  templateUrl: './detalleconvocatoria.component.html',
  styleUrls: ['./detalleconvocatoria.component.css']
})
export class DetalleconvocatoriaComponent implements OnInit {


 listaDepartamento: any =[];
 listaTipodocumentos: any =[];
 listaTipoformacionacademica: any =[];
  public loading: boolean=false

  listaMunicipios: any= [];
  //Datos del formulario
  formulario = {
    oidoferta: null,
    tipoIdentificacion: '',
    cedula: null ,
    nombre: '',
    apellido: '',
    anoNacimiento: '',
    tipoFormacion: '',
    experienciaCargo: '',
    experienciaLaboral: '',
    email: '',
    direccion: '',
    telefono: '',
    departamento: '',
    municipio: '',
    tipoAcademia: '',
    wassap: '',
    nombreArchivo:'',
    base64textString:'',
    nombreArchivoEscaneado:'',
    base64textStringEscaneado:''
  };

  archivo = {
    nombre: '',
    nombreArchivo: null,
    base64textString: ''
  }

  @ViewChild('formularioRef', { static: false }) formularioRef!: NgForm;

  //bandera para ocultar o mostrar el formulario
  banderaFormulario = false;
  //Bandera para ocultar mostrar el boton de postularme
  banderaBoton = false;
  oferta: any = [];
  oidOfertalocal: any = Number;
  oidOferta: any = Number;
  constructor(private ofertaService: OfertaService, 
              private detalleConvocatoriaService: DetalleConvocatoriaService,
              private sanitizer : DomSanitizer) { }

  ngOnInit(): void {

    //obtenemos la varible guardada en el localStorage
    this.oidOfertalocal = localStorage.getItem('oidOferta');
    //Obtenemos el oidEvento enviado desde el compoenente de eventos
    this.oidOferta = this.ofertaService.getoidOferta();
    if (this.oidOferta != null) {
      localStorage.setItem('oidOferta', this.oidOferta);
      //Obtenemos el detalle del evento
      this.detalleConvocatoriaService.get_detalle_oferta(this.oidOferta)
        .subscribe((response: any) => this.oferta = response.detalle_ofertas);

    } else {
      //Obtenemos el detalle del evento
      this.detalleConvocatoriaService.get_detalle_oferta(this.oidOfertalocal)
        .subscribe((response: any) => this.oferta = response.detalle_ofertas);
    }

    //Obtenemos la lista de departamentos
    this.detalleConvocatoriaService.listar_departamentos()
    .subscribe((response: any) => this.listaDepartamento = response.listaDepartamento);

    
    //Obtenemos la lista de departamentos
    this.detalleConvocatoriaService.listar_tipoDocumento()
    .subscribe((response: any) => this.listaTipodocumentos = response.lista_tipo_identificacion);

    
    //Obtenemos la lista de departamentos
    this.detalleConvocatoriaService.listar_tiposFormacionacademica()
    .subscribe((response: any) => this.listaTipoformacionacademica = response.lista_formacion_academia);
    

  }

  mostrarFormulario() {
    this.banderaFormulario = !this.banderaFormulario;
    this.banderaBoton = !this.banderaBoton;
  }

  ocultarBoton() {
    this.banderaBoton = !this.banderaBoton;
    this.banderaFormulario = !this.banderaFormulario;
  }

  capturarFile(event: any, soporte: any): any{
    var files = event.target.files;
    var file = files[0];
    //Hoja de vida
    if(soporte==1){
      var nombreArchivo= file.name;      
      this.extraerBase64(file).then((imagen :any) =>{
       this.formulario.nombreArchivo= nombreArchivo;
       this.formulario.base64textString=(imagen.base);
 
      })
    // Soportes escaneados
    }else{
      var nombreArchivo= file.name;      
      this.extraerBase64(file).then((imagen :any) =>{
       this.formulario.nombreArchivoEscaneado= nombreArchivo;
       this.formulario.base64textStringEscaneado=(imagen.base);
      })
    }
    console.log(this.formulario);

    
  }

  extraerBase64 = async ($event: any) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      
      return new Promise((resolve, reject) => {
        reader.onload = () => {
          resolve({
            base: reader.result
            
          });
        };
        reader.onerror = error => {
          resolve({
            base: null
          });
        };
      });
    } catch (e) {
      return Promise.resolve({
        base: null
      });
    }
  };
  enviarFormulario() {

    if (this.oidOferta != null) {
      this.formulario.oidoferta = this.oidOferta;
    } else {
      this.formulario.oidoferta = this.oidOfertalocal;
    }
    console.log(this.formulario);
    // Realizar la petición POST al servidor
    this.loading= true;
    this.detalleConvocatoriaService.enviar_oferta(this.formulario).subscribe(
      (response: any) => {
        if(response.status==200){
          Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'El formulario se envió exitosamente.',
          });
          this.formularioRef.reset();
          this.banderaFormulario = !this.banderaFormulario;
          this.loading= false;
        }else{
          Swal.fire({
            icon: 'warning',
            title: 'Advertencia',
            text: response.message,
          });
          this.formularioRef.reset();
          this.banderaFormulario = !this.banderaFormulario;
          this.loading= false;
        }
       
      },
      (error: any) => {
        console.error('Error:', error);
        this.loading= false;
        // Aquí puedes agregar código adicional para manejar el error
      }
    );
  }


  actualizarMunicipios() {
    const oid = this.formulario.departamento;
    this.listaMunicipios = []; // Vaciar la listaMunicipios si no se encuentra el departamento
    
    // Buscar el departamento en la lista
    const departamento = this.listaDepartamento.find((dep: { oidDepartamento: string; }) => dep.oidDepartamento === this.formulario.departamento);
  
    // Obtener la lista de municipios del departamento encontrado
    if (departamento != null) {
      this.listaMunicipios = departamento.listaMunicipios;
    } else {
      this.listaMunicipios = []; // Vaciar la listaMunicipios si no se encuentra el departamento
    }
  }
  



}