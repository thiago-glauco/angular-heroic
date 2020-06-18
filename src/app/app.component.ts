import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  title = 'Tour of Heros';
  message;
  constructor( 
    private router: Router
    ) {

  }



  goToHeroes( ) {
    this.router.navigate(['/heroes']);
  }


}
