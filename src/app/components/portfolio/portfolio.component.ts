import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ng2parallax } from '../../directives/parallax.directive';
declare function init(domObj:any):any;

@Component({
    selector: 'portfolio',
    templateUrl: './portfolio.component.html'
})

export class PortfolioComponent implements OnInit {
    public camera: any;
    public scene: any;
    public renderer: any;
    public mesh: any;
    public appendElement:number;
    public centuryLinkLogo:string = "assets/icon/centurylink.png";
    public gmLogo:string = "assets/icon/gm.png";
    public bestbuyLogo:string = "assets/icon/bestbuy.png";
    @ViewChild('cube') cube: any;
    constructor(private _router: Router,private el: ElementRef) {
    }
    public ngOnInit() {
        console.log('Initial App State'+this.cube.nativeElement);   
        init(this.cube.nativeElement);    
    }
}
