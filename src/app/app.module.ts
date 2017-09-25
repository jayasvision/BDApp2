import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Page1Component } from './pages/home/home.component';
import { Page2Component } from './pages/about/about.component';
import { Page3Component } from './pages/users/users.component';
import { Page4Component } from './pages/contact/contact.component';
import {routing, appRoutingProviders} from './app.routing';
import { SearchPipe } from './search.pipe';

import {Ng2Webstorage} from 'ng2-webstorage';


@NgModule({
  declarations: [
    AppComponent,Page1Component,Page2Component,Page3Component,Page4Component, SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    Ng2Webstorage
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
