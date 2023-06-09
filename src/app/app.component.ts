import { GlobalService } from 'src/app/services/global.service';
import { Component  } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  componentVisible = true;

  constructor(private globalService: GlobalService){
    globalService.obtenerRutas();
  }
  toggleComponent() {
    this.componentVisible = !this.componentVisible;
  }
  
}
