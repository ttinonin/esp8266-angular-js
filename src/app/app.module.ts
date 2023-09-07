import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LedComponent } from './led/led.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MobileSidebarComponent } from './mobile-sidebar/mobile-sidebar.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "iniciando/led", component: LedComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LedComponent,
    SidebarComponent,
    MobileSidebarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
