import { Component } from '@angular/core';
import { MessagingService } from "./services/messaging.service";
import { Router } from '@angular/router';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'Tour of Heros';
  message;
  constructor( 
    private router: Router,
    private messagingService: MessagingService
    ) {

  }

  goToHeroes( ) {
    this.router.navigate(['/heroes']);
  }


}
