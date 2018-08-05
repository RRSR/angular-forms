import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styles: [`
  div .ng-invalid {
    border: 1px solid red;
  }
  `]
})
export class TemplateDrivenComponent {

  user = {
    username: 'Raj',
    email: 'rrsr1312@gmail.com',
    password: 'test',
    gender: 'male'
  };

  genders = ['male', 'female'];

  onSubmit(myFrom: NgForm) {
    console.log(myFrom.value);
  }
}
