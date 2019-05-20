import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//material and flexLayout modules
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatBadgeModule} from '@angular/material/badge';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeroesComponent } from './views/heroes/heroes.component';
import { HeroDetailComponent } from './views/hero-detail/hero-detail.component';
import { HeroesService } from './services/heroes.service';
import { MessagesComponent } from './views/messages/messages.component';
import { MessageService } from './services/message.service';

import {AppRoutingModule} from './app-routing/app-routing.module';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { HomeComponent } from './views/home/home.component';
import { FileUploadTestComponent } from './views/file-upload-test/file-upload-test.component';

//firebase modules
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { FirebaseTestComponent } from './views/firebase-test/firebase-test.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';


const environment = {
  production: false,
  firebase: {
  apiKey: "AIzaSyC7ZEHQQ6Y6WK4eHqjLTi_SXkx0F2Adiw4",
  authDomain: "thiagoglaucoheroiceditor.firebaseapp.com",
  databaseURL: "https://thiagoglaucoheroiceditor.firebaseio.com",
  projectId: "thiagoglaucoheroiceditor",
  storageBucket: "thiagoglaucoheroiceditor.appspot.com",
  messagingSenderId: "618516520272",
  appId: "1:618516520272:web:c79f06df08dc50d5"}
};

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatDividerModule,
    MatBadgeModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule
  ],
  declarations: [ AppComponent, HelloComponent, HeroesComponent, HeroDetailComponent, MessagesComponent, DashboardComponent, FirebaseTestComponent, HomeComponent, FileUploadTestComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    AuthGuard,
    HeroesService,
    MessageService,
    AuthService
  ]
})
export class AppModule { }
