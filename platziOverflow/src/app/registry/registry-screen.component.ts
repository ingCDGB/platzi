import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../auth/user.model';

@Component({
    selector: 'app-registry-screen',
    templateUrl: './registry-screen.component.html',
    styles: [`
        p{
            text-align: center;
        }
    `]
})

export class RegistryScreenComponent{

    registryForm: FormGroup;
    /**
     * Validaciones del formulario
     */
    ngOnInit(){
        this.registryForm = new FormGroup({
            email: new FormControl(null,[
                Validators.required,
                Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
            ]),
            
            password: new FormControl(null,[
                Validators.required
            ]),

            firstName: new FormControl(null,[
                Validators.required
            ]),

            lastName: new FormControl(null,[
                Validators.required
            ])
        });
    }
    /**
     * Generar metodo onSubmit
     */
    onSubmit(){
        if(this.registryForm.valid){
            const {firstName, lastName, email, password } = this.registryForm.value;

            const newUser = new User(email,password, firstName, lastName);
        
            console.log(newUser);
        }
    }
}