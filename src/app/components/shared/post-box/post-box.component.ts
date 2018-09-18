import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-box',
  templateUrl: './post-box.component.html',
  styleUrls: ['./post-box.component.scss']
})
export class PostBoxComponent {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() image: string;
  @Input() description: string;
  constructor() { }


}
