import { Component,ElementRef,ViewChild,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Ng2parallax } from '../../directives/parallax.directive';
declare function initMainPage(homeDom:any):any;

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
    public profilePic = 'assets/icon/profile.png';
    @ViewChild('homeComponent') homeComponent: any;
    constructor(private _router: Router,private el: ElementRef) {
    this._router.navigate(['/']);
    }
    public ngOnInit() {
        initMainPage(this.homeComponent.nativeElement);
    }
}
