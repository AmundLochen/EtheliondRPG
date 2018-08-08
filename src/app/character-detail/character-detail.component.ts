import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
	   character: Character;
	   id: string;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
  this.id = "selvira";
  this.getCharacter();
  }

  getCharacter(){
  	
  	this.characterService.getCharacter(this.id).subscribe((data: Character) => this.character = data);
  }
}
