import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  logForm = new FormGroup({
      username:new FormControl(),
      password:new FormControl()
    })

    onSub(){
      console.log(this.logForm.value);
    }
}
