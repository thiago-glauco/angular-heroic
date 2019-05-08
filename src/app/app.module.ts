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
import { AngularFireModule } from '@angular/fire';

const environment = {
  
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
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule
  ],
  declarations: [ AppComponent, HelloComponent, HeroesComponent, HeroDetailComponent, MessagesComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ],
  providers: [HeroesService, MessageService]
})
export class AppModule { }
