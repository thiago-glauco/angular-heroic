import { Injectable } from '@angular/core';
import { Hero } from '../classes/hero';
import { HEROES } from '../classes/mock-heroes';
import { MessageService } from './message.service';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {

  constructor(private messageService: MessageService) { }

  getHeroes( ): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero( heroId: number ): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${heroId}`);
    return of( HEROES.find(  hero => hero.id === heroId ) );
  }

}