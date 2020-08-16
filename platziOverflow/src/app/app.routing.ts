import { Routes, RouterModule } from '@angular/router';
import { QuestionListComponent } from './question/question-list.component';
import { SigninScreenComponent } from './auth/signin-screen.component';
import { RegistryScreenComponent } from './registry/registry-screen.component';
import { QUESTION_ROUTES } from './question/question.routing';
/**
 * Agregamos nuestras rutas
 * Cada una de ellas será un objeto JavaScript
 */
const APP_ROUTES: Routes = [
    /**
     * si no colocamos pathMatch full al ser un string vacio la primera ruta
     * va a seguir validando con las otras rutas y al hacer match con la 1ra 
     * pero las demás rutas también comienzan entonces seguirá validando
     * con esto valida que luego del / hay string vacio
     */
    { path: '', component: QuestionListComponent, pathMatch: 'full' }, 
    { path: 'signin', component: SigninScreenComponent },
    { path: 'signup', component: RegistryScreenComponent },
    { path: 'questions', children: QUESTION_ROUTES }
];

//Nuestro sistema de ruta para nuestra aplicación
export const Routing = RouterModule.forRoot(APP_ROUTES);

