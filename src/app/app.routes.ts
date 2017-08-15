import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { NoContentComponent } from './no-content';
import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent ,data: { state: 'home'}},
  { path: 'home',  component: HomeComponent , data: { state: 'home'} },
  { path: 'portfolio', component: PortfolioComponent, data: { state: 'portfolio'}  },
  { path: 'contact', component: ContactComponent, data: { state: 'contact'} },
  { path: '**',    component: NoContentComponent }
];
