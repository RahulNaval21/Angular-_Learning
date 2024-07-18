import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
 // @Input() name1?:string;
 @Input() uname?:string;

 // @Output() onLogin = new EventEmitter<string>();
  constructor(private userService:UserService,private router:Router){
    
  }
 
  userId?:string;
  password?:string;
  name:string="";
  final?:[string];
  data: { item: string }[] = [];
  value?:string="blue";
  
  onLogin(){
    if(!this.userId || !this.password){
        alert("please fill up all the details");
        return;
    }
    console.log(this.userId,this.password);

    if(this.userService.validate(this.userId,this.password)){
      console.log("done")
      this.router.navigate(['home']);
    }
    

  if(!this.userService.validate(this.userId,this.password)){
    alert("invalid user");
  }

  
  }
  addName() {
    if (this.name) {
      this.data.push({ item: this.name });
      this.name = ''; 
    }
  }
  dltName() {
    this.data.splice(this.name.length-1,1);
  }
  

  title = 'login-form-app';

  @Output()
  notify:EventEmitter<string> = new EventEmitter<string>();

  onChildToParent(){
    this.notify.emit("this message is comingfrom child component")
  }


  category: string = "login 123";
  get username2(){
    return this.userService.username2;
  }
}
