import { NgModule } from '@angular/core';
//Display components of Angular Material
//import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

const modules = [
  MatToolbarModule,
  MatIconModule
]

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule{}
