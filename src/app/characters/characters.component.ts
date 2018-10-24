import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CharacterService } from '../character.service';
import {CharacterListObject} from '../characterListObject';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characterList: CharacterListObject[];
  selectedCharacter: CharacterListObject;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    //console.log("Does this run?");
    this.getCharacters();
  	//console.log("Character component running!");
  }
  onSelect(character: CharacterListObject): void {
    //console.log("Selecting a character works");
    this.selectedCharacter = character;
    //console.log(this.selectedCharacter.name);
  }

  /*createEvents(): string[]{
  	return new Array("Event1", "Event2", "Event3", "Event4")
  }*/
  getCharacters(): void{
    //console.log("Test");
  	this.characterService.getCharacters().subscribe(characterList => this.characterList = characterList.sort((a, b) => {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)}));  
  }
}
