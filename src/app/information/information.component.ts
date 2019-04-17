import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  services = [
    {
      name:'Service One',
      description:'A one service', 
      picture:''
    },{
      name:'Service Two', 
      description:'A two service', 
      picture:''
    },
    {
      name:'Service Three', 
      description:'A three service', 
      picture:''
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
