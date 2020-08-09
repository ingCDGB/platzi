import { Component } from '@angular/core';
import { Question } from './question.model'

// como se va a utilizar este componente
// que archivos va a requerir y utilizar este componente
@Component({
  selector: 'app-question-detail', //como se llamara en los archivos html
  templateUrl: './question-detail.component.html' //archivo html a consumir
})
// RECUERDA: avisarle al archivo app.module que será utilizado este componente
export class QuestionDetailComponent{
  question: Question = new Question(
  'Como se hacer Unit Test en IOS',
  'Esta es la descripción de mi pregunta sobre IOS',
  new Date,
  'devicon-apple-original colored'
  );

}
