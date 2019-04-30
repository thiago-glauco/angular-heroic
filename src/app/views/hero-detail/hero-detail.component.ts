import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private heroesService: HeroesService ) { }

  ngOnInit() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    console.log ('the id is ' + id);
    this.getHero( id )
  }

  getHero(id): void {
    this.heroesService.getHero( id )
      .subscribe( ( hero ) => {
        this.hero = hero;
      })
  }

  goBack( ) {
    this.location.back();
  }

}