import { Component  } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  componentVisible = true;

  toggleComponent() {
    this.componentVisible = !this.componentVisible;
  }
  
}
