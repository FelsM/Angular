import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './componets/data-binding/data-binding.component';
import { DirectivesComponent } from './componets/directives/directives.component';
import { HomeComponent } from './componets/home/home.component';
import { LifecycleComponent } from './componets/lifecycle/lifecycle.component';
import { PipesComponent } from './componets/pipes/pipes.component';
import { ServiceComponent } from './componets/service/service.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'lifecycle', component: LifecycleComponent },
  { path: 'databinding', component: DataBindingComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'service', component: ServiceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
