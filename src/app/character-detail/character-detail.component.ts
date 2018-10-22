import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Character } from '../character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
	   @Input() thisCharacter: Character
     character: Character;
	   id: number;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    console.log("Character name is " + this.thisCharacter.name + " " + this.thisCharacter.id.toString());
  this.id = this.thisCharacter.id;
  this.getCharacter();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("OnChanges run")
    this.id = this.thisCharacter.id;
    this.getCharacter();

  }

  getCharacter(){
  	
  	this.characterService.getCharacter(this.id).subscribe((data: Character) => this.character = data);
  }
}
