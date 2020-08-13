import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbartopComponent } from './navbartop/navbartop.component';
import { HtmlhomeComponent } from './htmlhome/htmlhome.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbartopComponent,
    HtmlhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
