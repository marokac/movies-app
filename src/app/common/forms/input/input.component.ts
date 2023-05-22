import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit {


  @Input() data:any;
  @Output() inputChange: EventEmitter<any> = new EventEmitter();

  inputValue = ''

  constructor() { }

  ngOnInit(): void {
  }
  onInputChange(event: any){
  this.inputValue = event;
  this.inputChange.next(event)
  }
 
}
