import { Question } from '../question/question.model';
/* 
NOTA 
cuando se declara la clase y se crea un constructor con los
atributos estos Angular los creara automaticamente a la clase
*/
export class User{
    constructor(
        public firstName: string,
        public lastName: string
    ){ }
}

export class Answer{

    constructor(
        public description: string,
        public question: Question,
        public createdAt?: Date,
        public user?: User
    ){ }
}