import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { EventService } from '../event.service';
import { EventListObject } from '../eventListObject';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
	eventList: EventListObject[];

  constructor(private eventService: EventService) { }

  ngOnInit() {
  	this.getEvents();
  }

  getEvents(): void{
  	this.eventService.getEventList().subscribe(
  		eventList => this.eventList = eventList.sort(
  			(a, b) => {return (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)}));
  }
}
