import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chilld',
  templateUrl: './chilld.component.html',
  styleUrls: ['./chilld.component.css']
})
export class ChilldComponent implements OnInit {

  @Output() public childData = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  callEvent() {
    this.childData.emit('Hello from Child Component');
  }
}
