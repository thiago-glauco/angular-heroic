import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//material modules
import 'hammerjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatBadgeModule} from '@angular/material/badge';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeroesComponent } from './views/heroes/heroes.component';
import { HeroDetailComponent } from './views/hero-detail/hero-detail.component';
import { HeroesService } from './services/heroes.service';
import { MessagesComponent } from './views/messages/messages.component';
import { MessageService } from './services/message.service';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatDividerModule,
    MatBadgeModule,
    MatToolbarModule
  ],
  declarations: [ AppComponent, HelloComponent, HeroesComponent, HeroDetailComponent, MessagesComponent ],
  bootstrap:    [ AppComponent ],
  providers: [HeroesService, MessageService]
})
export class AppModule { }
