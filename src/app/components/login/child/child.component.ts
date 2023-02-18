import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() data: string | undefined
  @Output() dataEvent = new EventEmitter<{name: string, age: number}>();
  name = ''
  age = 27

  sendData() {
    this.age++
    const test = {name: this.name, age: this.age}
    console.log(this.name)
    console.log(test);
    this.dataEvent.emit(test)
  }
}
