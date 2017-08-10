import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

    constructor(private _router: Router) {
    }

    /**
     * sendEmail
     */
    public sendEmail() {
        emailjs.init('user_1el9bk2xOsNmL01Tpw5R4');
        let contactComponent = this;
        emailjs.send('gmail', 'template_h7dhGx9i', { from_name: this.mailName, message_html: this.mailContent }).then(function (response: any) {
            contactComponent.successResponse = true;
            console.log('SUCCESS. status=%d, text=%s', response.status, response.text);
        }, function (err: any) {
            console.log('FAILED. error=', err);
            contactComponent.successResponse = false;
            contactComponent.failedResponse = true;
        });
    }

}
