import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildADetailsComponent } from './child-a/child-a-details/child-a-details.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {
    path: 'routes',
    component: ParentComponent,
    children: [
      { path: 'child-a', component: ChildAComponent },
      { path: 'child-a/:id', component: ChildADetailsComponent },
      { path: 'child-b', component: ChildBComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutesRoutingModule {}
