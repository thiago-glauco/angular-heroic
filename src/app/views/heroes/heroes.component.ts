import { Component, OnInit } from '@angular/core';
import { Hero } from '../../classes/hero';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
   this.heroesService.getHeroes()
    .subscribe((heroes) =>{
      this.heroes = heroes;
    });
    console.log(this.heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero; 
    console.log("seleted: " + this.selectedHero.name);
  }

}