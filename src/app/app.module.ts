import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ContentComponent } from './content/content.component';
import { ReviewContentComponent } from './review-content/review-content.component';
import { FooterComponent } from './footer/footer.component';
import { LanguageComponent } from './language/language.component';
import { BengaliComponent } from './bengali/bengali.component';
import { EnglishComponent } from './english/english.component';
import { HindiComponent } from './hindi/hindi.component';
import { SafePipeModule } from 'safe-pipe';
import { GenreComponent } from './genre/genre.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    ContentComponent,
    ReviewContentComponent,
    FooterComponent,
    LanguageComponent,
    BengaliComponent,
    EnglishComponent,
    HindiComponent,
    GenreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SafePipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
