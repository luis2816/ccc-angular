import { Component, ElementRef } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private elementRef: ElementRef){}

  rootFontSize = 16;

  showControls(){
    const controls = this.elementRef.nativeElement.querySelector('.accesibility');
    if(!controls.classList.contains('show'))controls.classList.add('show');
    else controls.classList.remove('show');
  }
  changeFontSize(size:boolean){
    const rootElm = document.documentElement;
    if(size){
      if(this.rootFontSize < 20)this.rootFontSize++;
    }else{
      if(this.rootFontSize > 16)this.rootFontSize--;
    }
    rootElm.style.setProperty('font-size', this.rootFontSize + 'px');
  }
}
