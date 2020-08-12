import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//Material Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Import de clase generada para los modulos de Angular Material
import { MaterialModule } from './material.module';
//
import 'hammerjs';
//NUESTROS COMPONENTES
//Estos deben estar en declarations
import { QuestionDetailComponent } from './question/question-detail.component'


import { MomentModule } from 'angular2-moment';

@NgModule({
  declarations: [
    AppComponent,
    QuestionDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
