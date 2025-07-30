import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Blocked } from './pages/blocked/blocked';
import { PageNotFound } from './pages/page-not-found/page-not-found';

@NgModule({
  declarations: [
    App,
    Blocked,
    PageNotFound
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
