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
    this.getCharacters();
  }
  onSelect(character: CharacterListObject): void {
    this.selectedCharacter = character;
  }
  getCharacters(): void{
  	this.characterService.getCharacters().subscribe(characterList => this.characterList = characterList.sort((a, b) => {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)}));  
  }
}
