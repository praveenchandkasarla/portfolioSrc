/**
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation,
  HostBinding,
  ElementRef
} from '@angular/core';
import {Router} from '@angular/router'
import { AppState } from './app.service';
import { routerTransition } from './router.animations';

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  animations: [ routerTransition ],
  host: { '[@routerTransition]': '' },
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  
  public className:string;
  constructor(private appState: AppState,private activeRouter: Router,private el: ElementRef) {
    this.activeRouter.events.subscribe((data:any) => {
        this.className = data.url.split('/').join(' ').trim();
        this.changeBodyClass();
      })
   }
  public changeBodyClass(){
    if(this.el.nativeElement.parentElement.nodeName === 'BODY'){
       this.el.nativeElement.parentElement.className = this.className ? this.className + '-page' : 'home-page';
  }
  }

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

}
