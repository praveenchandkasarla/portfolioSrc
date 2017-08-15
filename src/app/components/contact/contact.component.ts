import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ng2parallax } from '../../directives/parallax.directive';


declare var emailjs: any;

@Component({
    selector: 'contact',
    templateUrl: './contact.component.html'
})

export class ContactComponent {
    public mailName: string;
    public mailContent: string;
    public successResponse: boolean;
    public failedResponse: boolean;
    complexForm : FormGroup;
    
    
    constructor(private _router: Router,fb: FormBuilder) {
        let emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
        this.complexForm = fb.group({
        'mailName' :[null, Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])],
        'mailId' :[null, Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
        'mailContent':[null, Validators.compose([Validators.required, Validators.minLength(1)])]
    })
    }

    /**
     * sendEmail
     */
    public sendEmail() {
       emailjs.init('user_1el9bk2xOsNmL01Tpw5R4');
        let contactComponent = this;
        emailjs.send('gmail', 'template_h7dhGx9i', { from_name: this.complexForm.controls["mailName"].value, message_html: this.complexForm.controls["mailContent"].value }).then(function (response: any) {
            contactComponent.successResponse = true;
            console.log('SUCCESS. status=%d, text=%s', response.status, response.text);
        }, function (err: any) {
            console.log('FAILED. error=', err);
            contactComponent.successResponse = false;
            contactComponent.failedResponse = true;
        }); 
    }

}
