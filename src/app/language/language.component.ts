import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BengaliMovieInfoService } from '../bengali-movie-info.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  moviearr:any = [];
  url:any = [];

  constructor(private myservice:BengaliMovieInfoService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(){}

  onSelect(name:any){
    this.router.navigate(['/language',name]);
    console.log('abal');
    }

  }
