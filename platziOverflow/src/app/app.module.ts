import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//Material Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Import de clase generada para los modulos de Angular Material
import { MaterialModule } from './material.module';
//
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
