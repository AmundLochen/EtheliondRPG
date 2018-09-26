import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { EventService } from '../event.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  event: Event;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit() {
  	this.getEvent();
    //console.log("Event-detail component running!");
  };

  getEvent(): void{
    //console.log("getEvent started!");
    const id = +this.route.snapshot.paramMap.get('id');
  	this.eventService.getEvent(id).subscribe((data: Event) => this.event = data);
  	this.eventService.getEventText(id).subscribe((data: string) => this.event.eventText = data);
    //console.log("getEvent finished!");
  	//this.eventService.getEvent(this.id).subscribe((data: Event) => this.event = data);
  };

}
