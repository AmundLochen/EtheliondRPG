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
     map: Map<string, string> = new Map<string,string>();
     sortedEventArray: string[];

  constructor(private characterService: CharacterService, private eventService: EventService) { }

  ngOnInit() {
    this.getCharacter();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getCharacter();
  }

  getCharacter(){
  	if(this.map.size != 0) 
      {
        this.map.clear();
      }
    this.characterService.getCharacter(this.characterListObject.id).subscribe((data: Character) => 
      { this.character = data;
        this.map = this.eventService.getEventTextMap(this.character.events);
     });
  }
}
