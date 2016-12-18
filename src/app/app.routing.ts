import {Routes,RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HomeComponent} from './home.component';
import {SpeakersComponent} from './speakers/speakers.component';
import {SpeakersListComponent} from './speakers/speakers-list/speakers-list.component';
import {BioComponent} from './speakers/bio/bio.component';

const App_Routes:Routes = [
    {path:'',component:HomeComponent,pathMatch:"full"},
    {path:'speakers',component:SpeakersComponent,children:[
        {path:"speakers-list",component:SpeakersListComponent,outlet:"list"},
        {path:":id",component:BioComponent,outlet:"bio"}
    ]}
];

export const appRoutingProviders: any[] = [

];

export const routing:ModuleWithProviders = RouterModule.forRoot(App_Routes);