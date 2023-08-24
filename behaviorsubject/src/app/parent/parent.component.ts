import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
   constructor(private testservice: TestService){
      this.testservice.serviceText.subscribe(data=>{
        this.text=data;
      })
   }

   ngOnInit(): void {
     
   }
   text:string='mugi';

   add(){
    this.text="mugirajan";
    this.testservice.serviceText.next(this.text);
   }
}
