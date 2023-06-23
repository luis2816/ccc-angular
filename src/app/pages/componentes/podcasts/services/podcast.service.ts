import { GlobalService } from 'src/app/services/global.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PodcastService {

  constructor(private http: HttpClient, private globalService: GlobalService) { }

}
