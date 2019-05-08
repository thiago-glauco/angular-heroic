import { Injectable } from '@angular/core';
import { Hero } from '../classes/hero';
import { HEROES } from '../classes/mock-heroes';
import { AngularFireDatabase } from '@angular/fire/database';
import { MessageService } from './message.service';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {

  constructor(
      private messageService: MessageService,
      private db: AngularFireDatabase,
    ) {

     }

  getHeroes( ): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero( heroId: number ): Observable<any> {
    this.messageService.add(`HeroService: fetched hero id=${heroId}`);
    return this.db.object(heroId.toString()).valueChanges();
    //return of( HEROES.find(  hero => hero.id === heroId ) );
  }

}