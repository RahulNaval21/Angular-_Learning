// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-reactive-forms',
//   templateUrl: './reactive-forms.component.html',
//   styleUrl: './reactive-forms.component.scss'
// })
// export class ReactiveFormsComponent {

// }


import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service'
 
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss',
  providers: [UserService],
})
export class ReactiveFormsComponent {
  userGroup: FormGroup;
  constructor(private userService: UserService) {
    this.userGroup = new FormGroup({
      first_name: new FormControl(),
      last_name: new FormControl(),
      email: new FormControl(),
    });
  }
 
  onSubmit() {
    if (this.userGroup.valid) {
      console.log(this.userGroup.value);
      this.userService
        .createUser(this.userGroup.value)
        .subscribe((response) => {
          console.log(response);
        });
    }
    this.userGroup.reset();
  }

  // onSubmit(){
  //   console.log(this.userGroup.value.first_name);
  // }

  // onSubmit(){
  //   console.log(response);
  // }
}