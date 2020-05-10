import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { PictureCard } from '../models/card';
import {Categories} from '../models/categories';

@Injectable({
  providedIn: 'root'
})
export class PictureCardService {
  
  pictureCards: Array<PictureCard>;
  pictureCard: PictureCard;
  url = 'http://localhost:65389/Api/Shop';
  
  constructor(private http: HttpClient) { 

    this.pictureCards = [
      { id:'1', name: 'Apocalypsis cum figuris n. XII',  technique:'acrlylic on canvas', size:'70 cm. x 100 cm.', year: '2019', imageUrl: '../assets/images/IMG_08.png', author: 'Valerio Rossi'  }, 
      { id:'2', name: 'Apocalypsis cum figuris n. XIII',  technique:'acrlylic on paper', size:'100 cm. x 70 cm.', year: '2020', imageUrl: '../assets/images/rossi_AP04_1.jpg', author: 'Valerio Rossi'  }, 
    ];
  }

  getCategories(): Observable<any[]> {
    return of(Categories);
  }

  getAllCards(): Observable<PictureCard[]> {
    return of(this.pictureCards);
  }

  
  getCardById(pictureCardID: string): Observable<PictureCard> {
    //return this.http.get<Shop>(this.url + '/GetShopById/' + shopID);
    
    const cards = from(this.pictureCards);
    const filtered = from (cards.pipe(filter(card => card.id== pictureCardID)));
    return  filtered ;
  }

  

  createID()
  {
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,./;'[]\=-)(*&^%$#@!~`";
    const lengthOfCode = 10;
    return this.makeRandom(lengthOfCode, possible);
  }
   makeRandom(lengthOfCode: number, possible: string) {
    let text = "";
    for (let i = 0; i < lengthOfCode; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
      return text;
  }
}
