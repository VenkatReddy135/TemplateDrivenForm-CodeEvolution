import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  topics=['angular','css','javascript']
topicHasError=true;
userModel=new User('','',null,'default','morning',true);

validateTopic(value){
if(value=="default"){
  this.topicHasError=true;
}else{
  this.topicHasError=false;
}
}
onSubmit(userForm){
alert("Form is Submitted");
console.log(userForm);
}

}
 
