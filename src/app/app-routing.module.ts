import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './componets/data-binding/data-binding.component';
import { DirectivesComponent } from './componets/directives/directives.component';
import { HomeComponent } from './componets/home/home.component';
import { LifecycleComponent } from './componets/lifecycle/lifecycle.component';
import { PageNotFoundComponent } from './componets/page-not-found/page-not-found.component';
import { PipesComponent } from './componets/pipes/pipes.component';
import { ServiceComponent } from './componets/service/service.component';
import { LoadGuard } from './guards/load.guard';
import { ParentComponent } from './routes/parent/parent.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'lifecycle', component: LifecycleComponent },
  { path: 'databinding', component: DataBindingComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'service', component: ServiceComponent },
  {
    path: 'routes',
    loadChildren: () =>
      import('./routes/routes.module').then((m) => m.RoutesModule),
    canLoad: [LoadGuard],
  },
  {
    path: 'data-input',
    loadChildren: () =>
      import('./data-input/data-input.module').then((m) => m.DataInputModule),
  },
  {
    path: 'client-server',
    loadChildren: () =>
      import('./client-server/client-server.module').then(
        (m) => m.ClientServerModule
      ),
  },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
