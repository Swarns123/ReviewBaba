import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BengaliMovieInfoService {
  
  constructor(private http: HttpClient) { }

  getMoviesByLang(url: any){
    return this.http.get(url);
  }
}
