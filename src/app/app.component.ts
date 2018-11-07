import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  getDataFromA:string;
  gerDataA(event){
    this.getDataFromA = event;
  }
}