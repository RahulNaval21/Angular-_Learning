import { Component } from '@angular/core';
import { IUser } from '../../model/user';
import { UserService } from '../user.service';
 
@Component({
  selector: 'app-template-forms',
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.scss',
  providers: [UserService],
})
export class TemplateFormsComponent {
  user: IUser = {
    first_name: 'Mahesh',
    last_name: 'Ramisetty',
    email: 'kOqFP@example.com',
  } as IUser;
 
  constructor(private userService: UserService) {}
 
  onSubmit() {
    console.log(this.user);
    this.userService.createUser(this.user).subscribe((response) => {
      console.log(response);
    });
  }
}