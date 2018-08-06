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

  constructor(private eventService: EventService) { }

  ngOnInit() {
  	this.id = 'Event1';
  	this.getEvent();
    //console.log("Event-detail component running!");
  };

  getEvent(): void{
    //console.log("getEvent started!");
  	this.eventService.getEvent(this.id).subscribe((data: Event) => this.event = data);
    //console.log("getEvent finished!");
  	//this.eventService.getEvent(this.id).subscribe((data: Event) => this.event = data);
  };

}
