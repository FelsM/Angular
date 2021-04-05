import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './componets/first/first.component';
import { SecondComponent } from './componets/second/second.component';
import { RepeatComponent } from './componets/repeat/repeat.component';
import { HomeComponent } from './componets/home/home.component';

@NgModule({
  declarations: [AppComponent, FirstComponent, SecondComponent, RepeatComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
