import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';
import { ParentComponent } from './parent/parent.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { ChildADetailsComponent } from './child-a/child-a-details/child-a-details.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    ParentComponent,
    ChildAComponent,
    ChildBComponent,
    ChildADetailsComponent,
  ],
  imports: [CommonModule, RoutesRoutingModule],
  providers: [AuthService],
})
export class RoutesModule {}
