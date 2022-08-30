import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { FilterComponent } from './filter/filter.component';
import { LoaderComponent } from './loader/loader.component';

import { AppService } from './services/app.service';
import { HomeService } from './home/home.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemCardComponent,
    ContactComponent,
    PageNotFoundComponent,
    HomeComponent,
    FilterComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AppService,
    HomeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
