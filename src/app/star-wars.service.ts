import { Injectable } from '@angular/core';
import { LogService } from './log.service';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'
@Injectable()
export class StarWarsService {
  private characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' }
  ];
  private logService: LogService;
  public  characterChanged = new Subject<void>();
  http: Http;

  constructor(logService: LogService, http: Http ) {
    this.logService = logService;
    this.http = http;
  }

  fetchCharachters() {
    this.http.get('https://swapi.co/api/people/').map(
      (response: Response) => {
        const arr = response.json().results.map(
          (charEntry) => {
            return {name: charEntry.name, side: ''};
          }
        );
        return arr;
      }
    ).subscribe(
      (response) => {
         this.characters = response;
         this.characterChanged.next();
      }
    );
  }
  getCharacters(chosenList) {
    if (chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.side === chosenList;
    })
  }

  onSideChosen(charInfo) {
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    })
    this.characters[pos].side = charInfo.side;
    this.logService.writeLog('Changed side of ' + charInfo.name + ', new side: ' + charInfo.side);
    this.characterChanged.next();
  }

  addCharacter(name, side) {
    const pos = this.characters.findIndex((char) => {
      return char.name === name;
    })
    if (pos !== -1) {
      return;
    }
    const newChar = {name: name, side: side};
    this.characters.push(newChar);
  }
}
