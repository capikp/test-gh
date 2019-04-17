import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {

  title: string = 'My project';
  description: string = 'A open source project';

  constructor() { }

  ngOnInit() {
  }

}
