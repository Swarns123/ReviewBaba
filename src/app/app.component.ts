import { Component } from '@angular/core';
import { DataServiceService } from './data-service.service';
import { FormsModule } from '@angular/forms';
import { FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  input_value="Testing";

  showMe(){
    //console.log(this.input_value);
    this.datas.set({val:this.input_value});
  }

  constructor(public datas:DataServiceService){}
  

  
};