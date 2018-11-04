import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventsComponent } from './events/events.component';
import { TimelineComponent } from './timeline/timeline.component';
import { CampaignsComponent } from './campaigns/campaigns.component';

const routes: Routes = [
	{path: '', redirectTo: '/dashboard', pathMatch: 'full'},
	{path: 'characters', component: CharactersComponent},
	{path: 'dashboard', component: DashboardComponent},
	{path: 'detail/:id', component: CharacterDetailComponent},
	{path: 'event/:id', component: EventDetailComponent},
	{path: 'events', component: EventsComponent},
	{path: 'timeline', component: TimelineComponent},
	{path: 'campaigns', component: CampaignsComponent}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  	exports: [ RouterModule ]
})
export class AppRoutingModule { }
