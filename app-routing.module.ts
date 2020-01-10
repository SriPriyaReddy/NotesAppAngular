import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from '../layouts/dashboard-layout/dashboard-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent} from '../dashboard/main-nav/main-nav.component';
const routes : Routes =[
  {
    path : '',
    redirectTo: 'notesApp',
    pathMatch: 'full',
  },
  {
    path : '',
   component : MainNavComponent,
  },
  {
    path: '**',
    redirectTo: 'notesApp'
  }
]
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
