import { Component, OnInit } from '@angular/core';
import {SpeakersListService} from './speakersList.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-speakers-list',
  templateUrl: './speakers-list.component.html',
  styles: [`
    h3{
      margin:5px 0 15px 15px;
      color:#fff;
    }
    .speakers-imgs img{
        height:150px;
    }
    .wrapper{
      background-color:#333;
      overflow:hidden;
      padding:15px;
      margin:10px;
      border-radius:3px;
      box-shadow:rgba(0,0,0,0.21);
    }
    .speakers-imgs{
      overflow:hidden
    }
  `]
})
export class SpeakersListComponent implements OnInit {
  Speakers:any[];
  constructor(private _speakersService:SpeakersListService,private router:Router) {
      
  }

  ngOnInit() {
    this.Speakers=this._speakersService.Speakers;
  }
  onSpeakerClick(Id){
    this.router.navigate(['speakers',{outlets:{'bio':[Id]}}])
  }

}
