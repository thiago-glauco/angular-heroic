import { Component, OnInit } from '@angular/core';
import { Observable, of} from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-firebase-test',
  templateUrl: './firebase-test.component.html',
  styleUrls: ['./firebase-test.component.css']
})
export class FirebaseTestComponent implements OnInit {
  hero;
  name: string;
  avatar: string;

  constructor(private db: AngularFireDatabase ) { }
    
  ngOnInit() {
     this.db.object('11').valueChanges().subscribe( (hero) => 
       this.hero = hero
    );
  }

}