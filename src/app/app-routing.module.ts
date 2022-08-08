import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BengaliComponent } from './bengali/bengali.component';
import { ContentComponent } from './content/content.component';
import { EnglishComponent } from './english/english.component';
import { GenreComponent } from './genre/genre.component';
import { HindiComponent } from './hindi/hindi.component';
import { LanguageComponent } from './language/language.component';
import { LogInComponent } from './log-in/log-in.component';
import { ReviewContentComponent } from './review-content/review-content.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'',component:SignUpComponent},
  {path:'login', component:LogInComponent},
  {path:'content', component: ContentComponent},
  {path:'genre', component: GenreComponent},
  {path:'content/:movie', component: ReviewContentComponent},
  {path:'language', component: LanguageComponent},
  {path:'language/:lang', component: BengaliComponent, pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
