import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
	eventList: Event[];

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  getEvents(): void{
  	this.eventService.getEvent.
  }
}
