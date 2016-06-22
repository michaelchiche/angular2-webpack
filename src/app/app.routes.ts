import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { TestComponent } from './test';

export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'hello', component: TestComponent, outlet: 'aux'}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
