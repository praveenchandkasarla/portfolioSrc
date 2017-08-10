import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ng2parallax } from '../../directives/parallax.directive';

@Component({
    selector: 'portfolio',
    templateUrl: './portfolio.component.html'
})

export class PortfolioComponent {
    constructor(private _router: Router) {   
    }
}
