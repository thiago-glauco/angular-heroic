import { Routes } from '@angular/router';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HeroesComponent } from '../views/heroes/heroes.component';
import { DashboardComponent } from '../views/dashboard/dashboard.component';
import { HeroDetailComponent } from '../views/hero-detail/hero-detail.component';
import { HomeComponent } from '../views/home/home.component';
import { AuthGuard } from '../auth/auth.guard';


export const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'detail', component: HeroDetailComponent, canActivate: [AuthGuard] },
  { path: 'detail/:id', component: HeroDetailComponent, canActivate: [AuthGuard] },
]