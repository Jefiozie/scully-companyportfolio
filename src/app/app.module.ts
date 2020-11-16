import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { LazyImageDirective } from './lazy-image.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LazyImageDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
