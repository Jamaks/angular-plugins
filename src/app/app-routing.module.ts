import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NotLoadedComponent } from './not-loaded/not-loaded.component';

const appRoutes: Routes = [
  {
    path: '**',
    component: NotLoadedComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ]
})
export class AppRoutingModule { }
