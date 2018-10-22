import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharacterListObject } from './characterListObject';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getCharacter(id: number){
  	return this.http.get('./assets/characters/' + (id).toString() + '/profile.json');
  }
  getCharacters(): Observable<CharacterListObject[]>{

  	return this.http.get<CharacterListObject[]>('./assets/characters/characterlist.json');
  }
}
