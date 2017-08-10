import {trigger, animate, style, group, query, transition} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'fixed', width:'100%' })
      , { optional: true }),
    group([
      query(':enter', [
        style({  transition: '400ms cubic-bezier(0.250, 0.250, 0.750, 0.750) all' }),
        animate('0.5s ease-in-out', style({ transform: 'rotateX(0deg) rotateZ(0deg)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transition: '400ms cubic-bezier(0.250, 0.250, 0.750, 0.750) all'}),
        animate('0.5s ease-in-out', style({ transform: 'rotateX(90deg) rotateZ(90deg)' }))
      ], { optional: true })
    ])
  ])
])