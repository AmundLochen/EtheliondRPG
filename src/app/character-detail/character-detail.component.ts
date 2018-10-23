import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Character } from '../character';
import { CharacterListObject } from '../characterListObject';
import { CharacterService } from '../character.service';
import { EventService } from '../event.service';
import { Event } from '../event';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
	   @Input() characterListObject: CharacterListObject
     character: Character;
     map: Map<string, string>;

  constructor(private characterService: CharacterService, private eventService: EventService) { }

  ngOnInit() {
    //console.log("Character name is " + this.thisCharacter.name + " " + this.thisCharacter.id.toString());
    this.getCharacter();
  }

  ngOnChanges(changes: SimpleChanges) {
    //console.log("OnChanges run")
    this.getCharacter();
  }

  getCharacter(){
  	this.characterService.getCharacter(this.characterListObject.id).subscribe((data: Character) => this.character = data);
    /*for(let eventID of this.character.events)
    {
      //console.log(eventID);
      this.map.set(eventID, this.getEventTitle(parseInt(eventID)));
    }*/
  }

  getEventTitle(id: number): string{
    var returnValue;
    this.eventService.getEvent(id).subscribe((data: Event) => returnValue = data.name);
    return returnValue;
  }
}
