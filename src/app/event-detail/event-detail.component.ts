import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  id: string;
  event: Event;
  test: string;

  constructor(private eventService: EventService) { }

  ngOnInit() {
  	this.id = 'event1',
  	this.getEvent
  };

  getEvent(): void{
  	this.eventService.getEvent(this.id).subscribe((data: Event) => this.event = data)
  	//this.eventService.getEvent(this.id).subscribe((data: Event) => this.event = data);
  };

}
