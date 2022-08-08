import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BengaliMovieInfoService } from '../bengali-movie-info.service';

@Component({
  selector: 'app-bengali',
  templateUrl: './bengali.component.html',
  styleUrls: ['./bengali.component.scss']
})
export class BengaliComponent implements OnInit {

  any_movie:any=[];
  url:any=null;
  langto:any=null;

  constructor(private myservice:BengaliMovieInfoService, private route:ActivatedRoute, private router:Router) { }
    ngOnInit(){
      this.route.paramMap.subscribe((params:ParamMap) => {
        let bhasha=params.get('lang');
        this.langto=bhasha;
        console.log(this.langto);
      }); 
       if(this.langto=='bengali'){
         this.url='https://run.mocky.io/v3/e6848384-175a-4650-97f2-52ea2bae4b9d';
       }
       else if(this.langto=='english'){
         this.url='https://run.mocky.io/v3/5f4580e6-a86f-40ec-9137-a4dd9abb6acb';
       }
       else{
        this.url='';
       }
      this.myservice.getMoviesByLang(this.url).subscribe(response => this.any_movie=response); 
       }
  }
