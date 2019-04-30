import { Component, OnInit } from '@angular/core';
import { Hero } from '../../classes/hero';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
    this.heroesService.getHeroes()
      .subscribe( (heroes)=>{
        this.heroes = heroes.slice(0, 4);
      })
  }

}