import { Component } from '@angular/core';
import { Question } from './question.model';



const q = new Question(
    'Cómo hacer un microservicio con SpringBoot?',
    'necesito aprender a crear MS',
    new Date(),
    //'none'
    'devicon-javascript-plain'
);
@Component({
    selector: 'app-question-list',
    templateUrl: './question-list.component.html',
    styles: [`
        i {
            width: 40px !important;
            height: 40px !important;
            padding: 0 !important;
            font-size: 40px !important;
        }
    `]
})
export class QuestionListComponent{
    questions: Question[] = new Array(10).fill(q);
}