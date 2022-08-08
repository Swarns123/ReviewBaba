import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  data={};

  set(info:any){
    this.data=info;
  }

  get(){
    return this.data;
  }

  constructor() { }
}
