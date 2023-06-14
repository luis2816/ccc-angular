import { BlockButtonService } from './services/block-button.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-button',
  templateUrl: './block-button.component.html',
  styleUrls: ['./block-button.component.css']
})
export class BlockButtonComponent implements OnInit {
  podcast: any = []
constructor(private blockButtonService: BlockButtonService) {}

  ngOnInit(): void {
   //Se obtiene todos los podcast
   this.blockButtonService.getPodcast()
   .subscribe((response: any) => this.podcast= response.lista_podcast);
  }

}
