import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  implements OnInit{
  constructor(private testservice : TestService){
    this.testservice.serviceText.subscribe(data=>{
      this.text=data;
    })
  }
  ngOnInit(): void {
    
  }
  text:string="mugi"
}
