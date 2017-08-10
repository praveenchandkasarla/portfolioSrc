import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ng2parallax } from '../../directives/parallax.directive';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})

export class HomeComponent {
    //public homeBg = 'assets/img/home.jpg';
    constructor(private _router: Router) {
            this._router.navigate(['/']);
    }
}
