import { GlobalService } from 'src/app/services/global.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient, private globalService: GlobalService) { 
 }
 ruta= this.globalService.var_ruta_prod;

 getBlogs(): any {
  const url =this.ruta+'get_blog';
  return this.http.get(url);
}

}
