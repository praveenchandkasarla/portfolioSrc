import {trigger, animate, style, group, query, transition} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'fixed', width:'100%' })
      , { optional: true }),
    group([
      query(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('0.25s ease-in-out', style({transform: 'translateX(0%)'}))
        //style({  transition: '400ms cubic-bezier(0.250, 0.250, 0.750, 0.750) all' }),
        //animate('0.5s ease-in-out', style({ transform: 'rotateX(0deg) rotateZ(0deg)' }))
      ], { optional: true }),
      query(':leave', [
        style({transform: 'translateX(0%)'}),
        animate('0.25s ease-in-out', style({transform: 'translateX(-100%)'}))
        //style({ transition: '400ms cubic-bezier(0.250, 0.250, 0.750, 0.750) all'}),
        //animate('0.5s ease-in-out', style({ transform: 'rotateX(90deg) rotateZ(90deg)' }))
      ], { optional: true })
    ])
  ])
])