import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { SideBarComponent } from './layouts/side-bar/side-bar.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {MainNavComponent } from './dashboard/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    DashboardLayoutComponent,
    SideBarComponent,
    NavbarComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule { }
