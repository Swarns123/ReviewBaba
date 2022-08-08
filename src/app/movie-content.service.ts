import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieContentService {
  private review="https://run.mocky.io/v3/fac95963-09fc-4b1b-922b-f877e6d33812";

  constructor(private http:HttpClient) { }

  getReviews(){
    return this.http.get(this.review);
  }
}
