import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieInfoService {

  private movie="https://run.mocky.io/v3/eccef5de-4347-4d8e-a28e-d67d2968784f";

  constructor(private http:HttpClient) { }

  getMovies(){
    return this.http.get(this.movie);
  }
}
