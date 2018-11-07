import { Component, Input ,OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  dataB: string;
 @Input() set getDataFromParent( getDataFromParent: string){
    this.dataB = getDataFromParent;
    console.log(this.dataB);
  }
  ngOnInit(){}

}
