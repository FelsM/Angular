import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientServerComponent } from './client-server/client-server.component';

const routes: Routes = [{ path: '', component: ClientServerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientServerRoutingModule {}
