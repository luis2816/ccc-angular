import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pqrs-formulario',
  templateUrl: './pqrs-formulario.component.html',
  styleUrls: ['./pqrs-formulario.component.css']
})

export class PqrsFormularioComponent implements OnInit {
  @ViewChild("fileDropRef", { static: false })
  fileDropEl!: ElementRef;
  files:any[]=[];
  fileExt:string='';
  allowed:any=['doc', 'txt', 'xls', 'xlsx', 'docx', 'ppt', 'pptx', 'pdf', 'mp4', 'mp3', 'zip', 'jpg', 'jpeg', 'png', 'gif', 'rar'];

  solicitud:any='';
  subtitulo:any='';
  isDatosPersonales:boolean = false;
  isAgendarCita:boolean = false;
  anonimous: boolean = false;
  isJuridica:boolean = false;
  textAcercaDe:string='';

  constructor(private route: ActivatedRoute){
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.solicitud = params.get('solicitud');
      this.subtitulo = params.get('subtitulo');
      this.isDatosPersonales = params.get('solicitud') === 'datos-personales' ? true : false;
      this.isAgendarCita = params.get('solicitud') === 'agendar-cita' ? true : false;
      this.textAcercaDe = this.isAgendarCita ? 'Cuéntanos el motivo de tu cita' :  'Escribe acerca de tu solicitud';
    })
  }
  onSelectedPersona(val:string){
    this.isJuridica = val === 'juridica' ? true : false;
  }
  ChangeData(valid:boolean) {
    this.anonimous = valid;
  }

// upload file methods
  onFileDropped($event:any){
    console.log('onFileDropped');
    this.prepareFilesList($event);
  }
  fileBrowseHandler($files:any) {
    console.log('fileBrowseHandler');
    const file = $files.target.files;
    this.prepareFilesList(file);
  }
  deleteFile(index: number) {
    if (this.files[index].progress < 100) {
      console.log("Upload in progress.");
      return;
    }
    this.files.splice(index, 1);
  }
  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }
  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      let name= item.name;
      this.fileExt = name.slice(name.indexOf('.')+1).toLowerCase();
      if(this.allowed.includes(this.fileExt))this.files.push(item);
    }
    this.fileDropEl.nativeElement.value = "";

    console.log(this.allowed.includes(this.fileExt));
    if(this.allowed.includes(this.fileExt))this.uploadFilesSimulator(0);
  }
  formatBytes(bytes:number, decimals = 2) {
    if (bytes === 0) {
      return "0 Bytes";
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

}
