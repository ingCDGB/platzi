import { NgModule } from '@angular/core';
//Display components of Angular Material
import { MatSliderModule } from '@angular/material/slider';

const modules = [
  MatSliderModule
]

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule{}
