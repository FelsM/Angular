import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientServerRoutingModule } from './client-server-routing.module';
import { ClientServerComponent } from './client-server/client-server.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ClientServerComponent],
  imports: [
    CommonModule,
    ClientServerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ClientServerModule {}
