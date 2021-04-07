import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './componets/data-binding/data-binding.component';
import { HomeComponent } from './componets/home/home.component';
import { LifecycleComponent } from './componets/lifecycle/lifecycle.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'lifecycle', component: LifecycleComponent },
  { path: 'databinding', component: DataBindingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
