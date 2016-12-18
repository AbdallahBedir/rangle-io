import { Component, OnInit } from '@angular/core';
import {SpeakersListService} from '../speakers-list/speakersList.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styles: [`
    .wrapper{
      background-color:#333;
      overflow:hidden;
      padding:15px;
      margin:10px;
      border-radius:3px;
      box-shadow:rgba(0,0,0,0.21);
      color:#fff;
    }
  `]
})
export class BioComponent implements OnInit {
  speakerName:string="Select a Speaker";
  speakerInfo:string = "there are no speakers";
  constructor(private ActiveRoute:ActivatedRoute ,private _speakersListService:SpeakersListService,) {

   }

  ngOnInit() {
    this.ActiveRoute.params.subscribe(parameter=>{
      const id = +parameter['id'];
      this._speakersListService.Speakers.filter((element)=>{
        if(element.id == id){
          this.speakerName = element.name ; 
          this.speakerInfo= element.desc;
        }
      });
    })
  }

}
