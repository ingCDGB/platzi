import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from './user.model';

@Component({
    selector: 'app-signin-screen',
    templateUrl: './signin-screen.component.html',
    styleUrls: ['./signin-screen.component.css']
})

export class SigninScreenComponent implements OnInit{

    signinForm: FormGroup; //es la variable la cual se le hace BINDING en el formulario

    /**
     Validaciones para el formulario. Al iniciar el componente
     para ello utilizaremos OnInit del core de angular

     es una interfaz para los componentes y se debe tener el 
     metodo ngOnInit()
    */

    ngOnInit(){
        this.signinForm = new FormGroup({
            email: new FormControl(null,[
                Validators.required,
                Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
            ]),
            
            password: new FormControl(null,[
                Validators.required
            ])
        });
    }

    onSubmit(){
        if(this.signinForm.valid){
            const { email,password } = this.signinForm.value;
            
            console.log(email);
            console.log(password);
            const user = new User(email,password,"carlos","garcia");

            console.log(user);
        }
    }
}