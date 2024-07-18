import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  constructor(private router:Router){
    
  }
  firstName?:string;
  lastName?:string;
  password?:string;
  confirmPassword?:string;

  // bdate?: string ; // Assuming dob is bound to the ngModel of the date input
  // age?: number; // Initialize age as null
  // currdate = new Date();

  DOB?: Date ;
  age?: number ;
  calculateAge() {
    if (this.DOB) {
      const today = new Date();
      const birthDate = new Date(this.DOB);
      console.log(birthDate);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      console.log(today.getMonth(),birthDate.getMonth())

      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      this.age = age;
    }
  }

  onRegister(){

    
    // if(this.bdate){
    //   let dobDate: Date = new Date(this.bdate);
    //   let dobYear = dobDate.getFullYear();
    //   let currYear = this.currdate.getFullYear();
    //   let age: number = currYear - dobYear;
     
    //   console.log(age);
    //   if(age > 18){
    //     alert("congrats");
    //   }
    // }


   // console.log(this.firstName,this.lastName,this.password,this.confirmPassword,this.age);
   console.log(this.firstName,this.lastName,this.password,this.confirmPassword,this.age);
    // this.router.navigate(['home']);
  }
  title = 'signUp form';
}
