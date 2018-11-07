import { Component, Output ,EventEmitter,OnInit} from '@angular/core';
@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {
  @Output() fashe = new EventEmitter();
  dataA: string;
  fasheA(){
  this.dataA="我是来自A组件的数据";
  this.fashe.emit(this.dataA);
  }
  constructor() { }

  ngOnInit() {
  }

}
