import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPageresult } from '../model/page';
import { IUser } from '../model/user';
import { IPost } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: IUser[]=[];
static validate() {
  throw new Error('Method not implemented.');
}
username2:string = "user1234";
password:string= "1234";

validate(userId:string,password:string):Boolean{
  if(this.username2 == userId && this.password == password){
    return true;
  }
  return false;
}

  constructor(private httpClient:HttpClient) { }


 getData(){

  this.httpClient.get<IPageresult>('https://reqres.in/api/users?page=2').subscribe(
    page=> {
      console.log(page.data);
      this.users = page.data;
    }
  )
}

createUser(user:IUser){
  return this.httpClient.post('https://reqres.in/api/users?page=2',user);
}

// postData(newName:string,newJob:string){
//   this.httpClient.post<IPost>('https://reqres.in/api/users',{newName,newJob}).subscribe(response=>{
//     console.log(response);
//     console.log(response.newName,response.newJob);
//   })
// }

// getData(){
//   return this.httpClient.get<IPageresult>('https://reqres.in/api/users?page=2')
// }
}
