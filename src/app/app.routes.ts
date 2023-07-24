import { TabsPage } from './tabs/tabs.page';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/term',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'tab1',
    loadComponent: () => import('./tab1/tab1.page').then( m => m.Tab1Page)
  },
  {
    path: 'tab2',
    loadComponent: () => import('./tab2/tab2.page').then( m => m.Tab2Page)
  },
  {
    path: 'tab3',
    loadComponent: () => import('./tab3/tab3.page').then( m => m.Tab3Page)
  },
  {
    path: 'tab4',
    loadComponent: () => import('./tab4/tab4.page').then( m => m.Tab4Page)
  },
  {
    path: 'tab5',
    loadComponent: () => import('./tab5/tab5.page').then( m => m.Tab5Page)
  },
  {
    path: 'term',
    loadComponent: () => import('./pages/term/term.page').then( m => m.TermPage)
  },
  {
    path: 'consent',
    loadComponent: () => import('./pages/consent/consent.page').then( m => m.ConsentPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'address',
    loadComponent: () => import('./pages/address/address.page').then( m => m.AddressPage)
  },
  {
    path: 'mission-detail',
    loadComponent: () => import('./tab1/mission-detail/mission-detail.page').then( m => m.MissionDetailPage)
  },
];
