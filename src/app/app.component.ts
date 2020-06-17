import { Component, OnInit } from '@angular/core';
import { MessagingService } from "./services/messaging.service";
import { Router } from '@angular/router';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
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

  ngOnInit() {
    const userId = 'user001';
    this.messagingService.requestPermission(userId);
    this.messagingService.receiveMessage();
    this.message = this.messagingService.currentMessage;
  }

}
