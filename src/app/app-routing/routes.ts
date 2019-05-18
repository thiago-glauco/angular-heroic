import { Routes } from '@angular/router';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HeroesComponent } from '../views/heroes/heroes.component';
import { DashboardComponent } from '../views/dashboard/dashboard.component';
import { HeroDetailComponent } from '../views/hero-detail/hero-detail.component';
import { HomeComponent } from '../views/home/home.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
]