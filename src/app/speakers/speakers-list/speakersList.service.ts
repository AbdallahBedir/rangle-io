import {Injectable} from '@angular/core';

@Injectable()
export class SpeakersListService{
    Speakers:any[]=[
        {id:1,name:'hamaki',url:"hamaki.jpg",desc:"Amazing Singer MnAlbyBaghany"},
        {id:2,name:'Ellisa',url:"Ellisa.jpg",desc:"Amazing Singer SaharnaYalil"},
        {id:3,name:'Kazem',url:"kazem.jpg",desc:"Amazing Singer KtabEl7ob"},
        {id:4,name:'NancyAjram',url:"NancyAjram.jpg",desc:"Amazing Singer aha wnos"},
        {id:5,name:'Sandy',url:"Sandy.jpg",desc:"Amazing and gorgeous singer "},
        {id:6,name:'Tamer Hosny',url:"TamerHosny.jpg",desc:"Amazing Singer OmryEbtada"}
    ]
}