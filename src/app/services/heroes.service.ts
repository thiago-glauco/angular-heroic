import { Injectable } from '@angular/core';
import { Hero } from '../classes/hero';
import { HEROES } from '../classes/mock-heroes';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { MessageService } from './message.service';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  heroRef: AngularFireObject<any>;
  hero: Observable<any>;
  constructor(
      private messageService: MessageService,
      private db: AngularFireDatabase,) {     }

  getHeroes( ): Observable<any> {
    this.messageService.add('HeroService: fetched heroes');
    const heroList = this.db.list('heroes');
    
    return heroList.valueChanges();
  }

  getHero( heroId: number ): Observable<any> {
    this.messageService.add(`HeroService: fetched hero id=${heroId}`);
    return this.db.list('/heroes', ref => ref.orderByChild('id').equalTo(heroId)).valueChanges()
    //return this.db.object(heroId.toString()).valueChanges();
    //return of( HEROES.find(  hero => hero.id === heroId ) );
  }

  updateHero( heroId: number, name: string, avatar: string, comments: string ) {
    console.log("trying to update" + heroId +  " " + name);
    let itemRef: AngularFireObject<any>;
    itemRef = this.db.object(heroId.toString());
    itemRef.set({
      id: heroId,
      name: name,
      avatar: avatar,
      comments: comments
    });
  }

}