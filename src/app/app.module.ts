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
import { StorageService } from './services/storage.service';
import { DataTransferService } from './services/data-transfer.service';
import { DictionaryService } from './services/dictionary.service';

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
  // provider {provide: ServeiceName, useClass | useValue | useExisting | useFactory}

  // useValue - to pass spicific value
  // useClass - assign Service to specific Class. For testing purposes.
  // useExisting - to update/upgrade Service Version or for refactoring if behaviour duplicates exist
  // useFactory - to decide which class use for Srevice or how the service will looks like
  providers: [
    { provide: 'MY_APP_VERSION', useValue: 1 },
    { provide: StorageService, useExisting: DataTransferService },
    { provide: DataTransferService, useClass: DataTransferService }, // ~ DataTransferService
    {
      provide: StorageService,
      useFactory: (MY_APP_VERSION) =>
        MY_APP_VERSION > 1 ? new DataTransferService() : new StorageService(),
      deps: ['MY_APP_VERSION'],
    },
    DictionaryService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
