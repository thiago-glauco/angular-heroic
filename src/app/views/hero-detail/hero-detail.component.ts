import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../../classes/hero';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  hero: Hero;
  heroData;
  editMode: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private route: Router,
    private heroesService: HeroesService ) { }

  ngOnInit() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    console.log ('the id is ' + id);
    if( id !== 0 ) {
      this.getHero( id )
      this.editMode = true;
    }
    else {
     this.hero ={
      id: 0,
      name: "New Hero",
      avatar: "",
      comments: "",
     }
     this.editMode = false;
    }
  }

  getHero(id): void {
    console.log("getting hero:");
    this.heroesService.getHero( id )
      .subscribe( ( hero ) => {
        console.log(hero);
        this.heroData = hero[0];
        this.hero = {
          key: hero[0].key,
          id: hero[0].payload.val().id,
          name: hero[0].payload.val().name,
          avatar: hero[0].payload.val().avatar,
          comments: hero[0].payload.val().comments,
        }
      });
  }

  goBack( ) {
    this.location.back();
  }
  save( ) {
    console.log("trying to save");
    this.heroesService.updateHero(this.hero.key, Number(this.hero.id), this.hero.name, this.hero.avatar, this.hero.comments);
  }

  add(){
    this.heroesService.addHero(Number(this.hero.id), this.hero.name, this.hero.avatar, this.hero.comments)
  }

  erase( ) {
    this.heroesService.removeHero( this.hero.key );
    this.location.back();
  }
  cancel( ) {
    this.location.back();
  }
}