import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '../../model/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  newName:string = '';
  newJob: string = '';

getData(): void {
  this.userService.getData();
}


// Users: IUser[] = this.userService.users;

get Users(): IUser[]{
  return this.userService.users;
 }  

//  postCheck(){
//   this.userService.postData(this.newName,this.newJob);
//  }
  
  constructor(private userService:UserService){}
}
