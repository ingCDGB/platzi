import { Component } from '@angular/core';

// como se va a utilizar este componente
// que archivos va a requerir y utilizar este componente
@Component({
  selector: 'app-question-detail', //como se llamara en los archivos html
  templateUrl: './question-detail.component.html' //archivo html a consumir
})
// RECUERDA: avisarle al archivo app.module que será utilizado este componente
export class QuestionDetailComponent{

}
