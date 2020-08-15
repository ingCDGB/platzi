import { Question } from '../question/question.model';
import { User } from '../auth/user.model';
/* 
NOTA 
cuando se declara la clase y se crea un constructor con los
atributos estos Angular los creara automaticamente a la clase
*/
export class Answer{

    constructor(
        public description: string,
        public question: Question,
        public createdAt?: Date,
        public user?: User
    ){ }
}