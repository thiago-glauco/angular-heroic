import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { mergeMapTo } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public authService: AuthService,
    private router: Router) { }

  ngOnInit() {

  
  }

  enter() {
    this.authService.login();
    this.router.navigate( ['dashboard']);
  }

}