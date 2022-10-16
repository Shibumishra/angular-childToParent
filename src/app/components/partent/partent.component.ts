import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partent',
  templateUrl: './partent.component.html',
  styleUrls: ['./partent.component.css']
})
export class PartentComponent implements OnInit {
  message: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
