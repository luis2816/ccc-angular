import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent{
  @ViewChild('closebutton')
  closebutton!: { nativeElement: { click: () => void; }; };


  public toggleMenu(){
    this.closebutton.nativeElement.click();
  }
}
