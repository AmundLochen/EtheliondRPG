import { Component, OnInit } from '@angular/core';
import { Character } from '../character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
	//character: Character;
	//characterList: Character[];


  constructor() { }

  ngOnInit() {
  	//console.log("Character component running!");
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
