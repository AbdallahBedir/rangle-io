import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {AppComponent } from './app.component';
import {routing,appRoutingProviders} from './app.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { SpeakersListComponent } from './speakers/speakers-list/speakers-list.component';
import { BioComponent } from './speakers/bio/bio.component';
import {SpeakersListService} from './speakers/speakers-list/speakersList.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HomeComponent,
    SpeakersComponent,
    SpeakersListComponent,
    SpeakersListComponent,
    BioComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders,SpeakersListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
