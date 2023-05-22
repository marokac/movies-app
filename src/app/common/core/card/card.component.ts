import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  
  @Input() item:any = {
    imageUrl:'http/ssssssss'  , price: 10 , subub: 'amelodi' , title: 'test' , description:'test'
  };
  constructor() { }

  ngOnInit(): void {
  }
}
