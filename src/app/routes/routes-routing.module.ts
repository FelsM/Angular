import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildADetailsComponent } from './child-a/child-a-details/child-a-details.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { AuthGuard } from './guards/auth.guard';
import { ChildAuthGuard } from './guards/child-auth.guard';
import { DeactGuard } from './guards/deact.guard';
import { ResGuard } from './guards/res.guard';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {
    path: '',
    component: ParentComponent,
    canActivateChild: [ChildAuthGuard],
    children: [
      { path: 'child-a', component: ChildAComponent },
      {
        path: 'child-a/:id',
        component: ChildADetailsComponent,
        canActivate: [AuthGuard],
        resolve: [ResGuard],
      },
      {
        path: 'child-b',
        component: ChildBComponent,
        canDeactivate: [DeactGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutesRoutingModule {}
