import {Directive,EventEmitter,HostBinding,HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appDnd]'
})
export class DndDirective {
  @HostBinding('class.fileover') fileOver: boolean=false;
  @Output() fileDropped = new EventEmitter<any>();
  // fileDropped: any;
  constructor(){}
  // Dragover listener
  @HostListener('dragover', ['$event']) onDragOver(evt: { preventDefault: () => void; stopPropagation: () => void; }) {
    this.fileOver = true;
  }

  // Dragleave listener
  @HostListener('dragleave', ['$event']) public onDragLeave(evt: { preventDefault: () => void; stopPropagation: () => void; }) {
    this.fileOver = false;
  }

  // Drop listener
  @HostListener('drop', ['$event']) public ondrop(evt: { preventDefault: () => void; stopPropagation: () => void; dataTransfer: { files: any; }; }) {
    this.fileOver = false;
    let files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.fileDropped.emit(files);
      console.log(`you dropped ${files.length} files.`);
    }
  }
}
