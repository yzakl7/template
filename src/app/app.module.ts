import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostBoxComponent } from './components/shared/post-box/post-box.component';
import { HomeComponent } from './components/home/home.component';
import { Page2Component } from './components/page2/page2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchFilterPipe } from './pipes/search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PostBoxComponent,
    HomeComponent,
    Page2Component,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
