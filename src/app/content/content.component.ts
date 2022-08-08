import { Component, OnInit } from '@angular/core';
import { MovieInfoService } from '../movie-info.service';
import { DataServiceService } from '../data-service.service';
import { Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  public movies:any = [];
  public movie:any;
  searchProperty:any;

  constructor(private myservice:MovieInfoService, private datas:DataServiceService, private router:Router) {
   }

  ngOnInit(){
    this.myservice.getMovies().subscribe(response=> this.movies=response);
    console.log("from constructor");
    this.movies.find((movie:any) =>{
      return movie.movie_name === this.searchProperty;
    })
  }

  ngDoCheck(){
    this.searchProperty=this.datas.get();
    this.datas.set({});
    console.log(this.searchProperty);
  }

  // onSelect(movie:any){
  //   this.router.navigate(['/content',movie.movie_name]);
  // }

}
