import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Character } from '../character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
	   @Input() characterName: string
     character: Character;
	   id: string;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    console.log("Character name is " + this.characterName);
  this.id = this.characterName;
  this.getCharacter();
  }

  ngOnChanges(changes: SimpleChanges) {
    const characterName: SimpleChange = changes.characterName;
    this.id = characterName.currentValue;
    this.getCharacter();

  }

  getCharacter(){
  	
  	this.characterService.getCharacter(this.id).subscribe((data: Character) => this.character = data);
  }
}
