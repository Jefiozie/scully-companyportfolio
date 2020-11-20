import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { LazyImageDirective } from './lazy-image.directive';


@NgModule({
  declarations: [
    AppComponent,
    LazyImageDirective,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ScullyLibModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
