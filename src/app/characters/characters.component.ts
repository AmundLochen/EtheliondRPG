import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CHARACTERS } from '../characterlist';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
	characters = CHARACTERS;
  selectedCharacter: string;

  constructor() { }

  ngOnInit() {
  	//console.log("Character component running!");
  }
  onSelect(character: string): void {
    console.log("Selecting a character works");
    this.selectedCharacter = character;
    console.log(this.selectedCharacter);
  }

  /*createEvents(): string[]{
  	return new Array("Event1", "Event2", "Event3", "Event4")
  }*/
  /*getCharacterList(): void{
  	const characterFolder = './assets/characters';

  	characterFolder
  	this.characterList.push()
  }*/
}

