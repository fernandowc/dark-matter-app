import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { HomeComponent } from './pages/home/home.component';

const rutas: Routes= [

  {
    path: 'home',
    loadChildren: () => import('./pages/pages.module').then( m => m.PagesModule )
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  },


];

@NgModule({
    imports: [
      RouterModule.forRoot( rutas )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule { }