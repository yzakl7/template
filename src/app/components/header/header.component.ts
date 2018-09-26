import { Component, OnInit, HostListener } from '@angular/core';
import {  trigger,
          style,
          transition,
          animate,
          keyframes,
          query,
          stagger,
          group,
          state,
          animateChild } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('menuAnimation', [
      transition('void => *', [
        query('*', style({ opacity: 0}), {optional: true}),
        query('*', stagger('50ms', [
          animate('0.3s linear', keyframes([
            style({opacity: 1, transform: 'scaleX(0)', transformOrigin: 'left', offset: 0}),
            style({transform: 'scaleX(1.05)', offset: 0.7}),
            style({transform: 'scaleX(1)', offset: 1}),
            ]))]), {optional: true}),
      ]),
      transition('* => void', [
        query('*', stagger('50ms', [
          animate('0.3s linear', keyframes([
            style({transformOrigin: 'left', offset: 0}),
            style({transform: 'scaleX(1.05)', offset: 0.3}),
            style({transform: 'scaleX(0)', offset: 1.0}),
            ]))]), {optional: true}),
      ]),
      ])
    ]
})

export class HeaderComponent implements OnInit {
  public innerWidth: any;
  public isOpen: boolean;

  constructor() {}
  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }
  menuHandler() {
    if (this.isOpen) {
      this.isOpen = false;
    } else {
      this.isOpen = true;
    }
  }

}


