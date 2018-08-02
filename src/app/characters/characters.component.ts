import { Component, OnInit } from '@angular/core';
import { Character } from '../character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
	character: Character = {
		id: 1,
		name: 'Charles Caballero',
		class: 'Cavalier',
		race: 'Human',
		faction: 'Legendary Knights',
		background: 'Insert background story here!',
		events: this.createEvents()
	}

  constructor() { }

  ngOnInit() {
  }

  createEvents(): string[]{
  	return new Array("Event1", "Event2", "Event3", "Event4")
  }
}
