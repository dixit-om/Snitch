import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NewArrivals } from './pages/new-arrivals/new-arrivals';
import { Shirts } from './pages/shirts/shirts';
import { Jeans } from './pages/jeans/jeans';
import { Trousers } from './pages/trousers/trousers';
import { Polos } from './pages/polos/polos';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'new-arrivals', component: NewArrivals },
  { path: 'shirts', component: Shirts },
  { path: 'jeans', component: Jeans },
  { path: 'trousers', component: Trousers },
  { path: 'polos', component: Polos },
];
