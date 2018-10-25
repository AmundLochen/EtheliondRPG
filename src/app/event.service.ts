import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from './event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getEvent(id: number){
  	return this.http.get('./assets/events/event' + id + "/event" + id + '.json');
  }
  getEventText(id: number){
  	
  	return this.http.get('./assets/events/event' + id + "/event" + id + '_text.txt', {
  		responseType: 'text'
  	});
  }
  getEventTextMap(eventList: string[]): Map<string, string>{
    let map = new Map<string, string>();
    for(let eventID of eventList)
        {
           this.getEvent(parseInt(eventID)).subscribe(
             (data: Event) => 
               { 
                 map.set(eventID, data.name); 
               }
             );
        }
        return map;
  }
}
