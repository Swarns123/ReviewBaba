import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent{
    title = 'review-baba';
    userForm = new FormGroup({
      name:new FormControl(null,[Validators.required, Validators.maxLength(10), Validators.minLength(5)]),
      email:new FormControl(),
      phone:new FormControl(null, Validators.pattern('^[6-9][0-9]{9}$')),
      user_detail:new FormGroup({
        username:new FormControl(),
        password:new FormControl()
      })
    });
    onSubmit(){
      console.log(this.userForm.value);
    }

}
