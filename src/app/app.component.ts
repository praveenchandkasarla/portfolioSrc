/**
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation,
  HostBinding
} from '@angular/core';
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
  
  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }
  getState(outlet) {
    console.log("outlet state"+outlet.activatedRouteData.state);
    return outlet.activatedRouteData.state;
  }

}
