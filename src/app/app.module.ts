import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LedComponent } from './led/led.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MobileSidebarComponent } from './mobile-sidebar/mobile-sidebar.component';
import { HomeComponent } from './home/home.component';
import { ConexaoComponent } from './conexao/conexao.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "iniciando/led", component: LedComponent },
  { path: "iniciando/conexao", component: ConexaoComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LedComponent,
    SidebarComponent,
    MobileSidebarComponent,
    HomeComponent,
    ConexaoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    HttpClientModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
