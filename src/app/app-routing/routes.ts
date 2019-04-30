import { Routes } from '@angular/router';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HeroesComponent } from '../views/heroes/heroes.component';
import { DashboardComponent } from '../views/dashboard/dashboard.component';
import { HeroDetailComponent } from '../views/hero-detail/hero-detail.component';


export const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
]