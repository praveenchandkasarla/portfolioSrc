import { Component ,OnInit,ViewChild,ElementRef} from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ng2parallax } from '../../directives/parallax.directive';


declare var emailjs: any;

@Component({
    selector: 'contact',
    templateUrl: './contact.component.html'
})

export class ContactComponent implements OnInit{
    public mailName: string;
    public mailContent: string;
    public successResponse: boolean;
    public failedResponse: boolean;
    @ViewChild('recaptchaForm') recaptchaForm:any;
    public errorMsg = "Error occured, please try later!";
    complexForm : FormGroup;
    
    
    constructor(private _router: Router,fb: FormBuilder,private el: ElementRef) {
        let emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
        this.complexForm = fb.group({
        'mailName' :[null, Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])],
        'mailId' :[null, Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
        'mailContent':[null, Validators.compose([Validators.required, Validators.minLength(1)])]
        });

    }

    public ngOnInit() {
        var doc = this.recaptchaForm.nativeElement;
        var script = document.createElement('script');
        script.innerHTML = '';
        script.src = 'https://www.google.com/recaptcha/api.js';
        script.async = true;
        script.defer = true;
        doc.innerHTML = "";
        doc.appendChild(script);
    }


    /**
     * sendEmail
     */
    public sendEmail() {
       
       emailjs.init('user_1el9bk2xOsNmL01Tpw5R4');
        let contactComponent = this;
        contactComponent.successResponse = false;
        contactComponent.successResponse = false;
        emailjs.send('gmail', 'template_h7dhGx9i', { from_name: this.complexForm.controls["mailName"].value,from_emailId: this.complexForm.controls["mailId"].value,message_html: this.complexForm.controls["mailContent"].value }).then(function (response: any) {
            contactComponent.successResponse = true;
            contactComponent.failedResponse = false;
            console.log('SUCCESS. status=%d, text=%s', response.status, response.text);
        }, function (err: any) {
            console.log('FAILED. error=', err);
            if(err.text && err.text.indexOf("CAPTCHA")){
                contactComponent.errorMsg ="Please confirm recaptcha above!";
            } else{
                contactComponent.errorMsg ="Error occured, please try later!";
            }
            contactComponent.successResponse = false;
            contactComponent.failedResponse = true;
        }); 
    }

}
