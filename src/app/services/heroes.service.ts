import { Injectable } from '@angular/core';
import { Hero } from '../classes/hero';
import { HEROES } from '../classes/mock-heroes';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from '@angular/fire/database';
import { MessageService } from './message.service';
import { Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  heroRef: AngularFireObject<any>;
  hero: Observable<any>;
  heroesList: Observable<any>;
  heroesListRef: AngularFireList<any>;

  constructor(
    private messageService: MessageService,
    private db: AngularFireDatabase,) { 
    this.heroesListRef = this.db.list('/heroes');
    this.heroesList = this.heroesListRef.snapshotChanges().pipe(
      map(changes => 
        changes.map((item) => ({key: item.payload.key, ...item.payload.val()}))
      )
    );
    console.dir(this.heroesList);
  }

  getHeroes( ): Observable<any> {
    this.messageService.add('HeroService: fetched heroes');
    return this.heroesList;
  }

  getHero( heroId: number ): Observable<any> {
    this.messageService.add(`HeroService: fetched hero id=${heroId}`);
    return this.db.list('/heroes', ref => ref.orderByChild('id').equalTo(heroId)).snapshotChanges();
  }

  updateHero( heroId: number, name: string, avatar: string, comments: string ) {
    console.log("trying to update" + heroId +  " " + name);
    this.heroesListRef.update(
      heroId.toString(), {
      id: heroId,
      name: name,
      avatar: avatar,
      comments: comments
    });
  }

}