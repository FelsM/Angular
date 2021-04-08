import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './componets/first/first.component';
import { SecondComponent } from './componets/second/second.component';
import { RepeatComponent } from './componets/repeat/repeat.component';
import { HomeComponent } from './componets/home/home.component';
import { LifecycleComponent } from './componets/lifecycle/lifecycle.component';
import { LifecycleChildComponent } from './componets/lifecycle/lifecycle-child/lifecycle-child.component';
import { DataBindingComponent } from './componets/data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './componets/directives/directives.component';
import { StructuralComponent } from './componets/directives/structural/structural.component';
import { AttributiveComponent } from './componets/directives/attributive/attributive.component';
import { PipesComponent } from './componets/pipes/pipes.component';
import { ServiceComponent } from './componets/service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    RepeatComponent,
    HomeComponent,
    LifecycleComponent,
    LifecycleChildComponent,
    DataBindingComponent,
    DirectivesComponent,
    StructuralComponent,
    AttributiveComponent,
    PipesComponent,
    ServiceComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
