import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  name1?:string;
  title = 'loginFormNew';
  username:string ="john";

  childData?:string;
  parentMethod(data: string | undefined){
    this.childData = data;
  }

  
}
