import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  
  @Input() item:any
  constructor() { }

  ngOnInit(): void {
  }


}
