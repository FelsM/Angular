import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataInputRoutingModule } from './data-input-routing.module';
import { DataInputComponent } from './data-input/data-input.component';
import { ModelDrivenComponent } from './model-driven/model-driven.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DataInputComponent,
    ModelDrivenComponent,
    TemplateDrivenComponent,
  ],
  imports: [CommonModule, FormsModule, DataInputRoutingModule],
})
export class DataInputModule {}
