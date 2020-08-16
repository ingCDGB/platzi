import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Answer } from './answer.model';
import { Question } from '../question/question.model';
import { User } from '../auth/user.model';

@Component({
    selector: 'app-answer-form',
    templateUrl: './answer-form.component.html' ,
    styles:[`
        form{
            display: flex;
            flex-direction: column;
            width: 90%;
            margin: 40px auto;
            margin-top: 20px;
        }
    `]
})

export class AnswerFormComponent {
    /*
        @Input está en el core de angular 
        propiedad que debe ser asignada de otro lado
     */
    @Input() question: Question;
    /*
        Tenemos que pasarle la pregunta a la que hace referencia 
        esto se hace mediante el componente
        question-detail.component tiene que indicar al answer-form 
        que estamos hablando de esta pregunta.
    */
    onSubmit(form: NgForm){
        const answer = new Answer( 
             form.value.description, 
             this.question, 
             new Date(), 
             new User(null,null,"Carlos David","Garcia Bendahan")
        );
        //push agrega al final
        //unshift agrega en primer lugar
        this.question.answers.unshift(answer);
        //limpiamos el formulario
        console.log(answer)
        form.reset(); 
    }
}