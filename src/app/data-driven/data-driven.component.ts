import {Component} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-data-driven',
  templateUrl: 'data-driven.component.html',
  styles: [`
    div .ng-invalid {
      border: 1px solid red;
    }
  `]
})
export class DataDrivenComponent {

  myForm: FormGroup;

  genders = ['male', 'female'];

  constructor() {
    this.myForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl('Raj', [Validators.required, this.exampleValidator]),
        'email': new FormControl('rrsr1312@gmail.com', [
          Validators.required,
          Validators.pattern('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)' +
            '+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?')])
      }),
      'password': new FormControl('test', Validators.required),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([
        new FormControl('Cooking', Validators.required, this.asyncExampleValidtor)
      ])
    });

    this.myForm.statusChanges.subscribe(
      (data: any) => console.log(data)
    );
  }

  onSubmit() {
    console.log(this.myForm);
  }

  addHobby() {
    (<FormArray>this.myForm.controls['hobbies']).push(new FormControl('', Validators.required, this.asyncExampleValidtor));
  }

  exampleValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Example') {
      return {example: true};
    } else {
      return null;
    }
  }

  asyncExampleValidtor(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'Example') {
            resolve({'invalid': true});
          } else {
            resolve(null);
          }
        }, 1500);
      }
    );
    return promise;
  }

  reset() {
    this.myForm.reset({
      userData: {username: 'Jack', email: 'test@123.com'},
      password: 'password',
      gender: 'male',
      hobbies: ['Singing']
    });
    console.log(this.myForm);
  }
}
