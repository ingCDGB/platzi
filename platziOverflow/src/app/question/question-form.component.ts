import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Question } from './question.model';
import icons from './icons';

@Component({
    selector: 'app-question-form',
    templateUrl: './question-form.component.html',
    styles: [`
        i {
            font-size: 50px;
        }

        button{
            position: fixed;
            bottom: 0;
            width: 90%;
            z-index: 2;
            background-color: white;
            border-top: 1px solid #dcdcdc;
        }
    `]
})

export class QuestionFormComponent {

    icons: Object[] = icons;

    getIconVersion(icon: any){
        let version = 'devicon-'+icon.name+'-';
        if(icon.versions.font.includes('plain-wordmark')){
            version += 'plain-wordmark';
        }else{
            if(icon.versions.font.length !== 0 && icon.versions.font[0] !== "" ){
                version += icon.versions.font[0];
            }else{
                //version = icon.versions.svg[0];
                version = 'material-icons';
            }
        }
        return version;
    }

    onSubmit(form:NgForm){
        const q = new Question(
            form.value.title,
            form.value.description,
            new Date(),
            form.value.icon
        );

        console.log(q);
    }
} 