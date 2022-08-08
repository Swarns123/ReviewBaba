import { Component, OnInit } from '@angular/core';
import { MovieContentService } from '../movie-content.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-review-content',
  templateUrl: './review-content.component.html',
  styleUrls: ['./review-content.component.scss']
})
export class ReviewContentComponent implements OnInit {

  public reviews:any = [];
  public movie_final: any;
  public movie_show: any;
  

  constructor(private myservice:MovieContentService, private route: ActivatedRoute) { }

  ngOnInit(){
    this.myservice.getReviews().subscribe(response=>{
      this.route.paramMap.subscribe((params : ParamMap) => {
        this.reviews=response;
        let movie_imp= params.get('movie');
        this.movie_final= movie_imp;
        this.movie_show = this.reviews.find((review:any) => review.movie===this.movie_final);
        console.log(this.reviews,this.movie_show);
        console.log(movie_imp);
      })
    });
  }
}
