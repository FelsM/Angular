import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataInputComponent } from './data-input/data-input.component';
import { ModelDrivenComponent } from './model-driven/model-driven.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

const routes: Routes = [
  {
    path: '',
    component: DataInputComponent,
    children: [
      { path: 'template-driven', component: TemplateDrivenComponent },
      { path: 'model-driven', component: ModelDrivenComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataInputRoutingModule {}
