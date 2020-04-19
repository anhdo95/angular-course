import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/shared/ingredient.model';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingradientCreated = new EventEmitter<Ingredient>()

  signUpForm: FormGroup
  forbiddenUsernames = ['admin', 'superadmin']
  forbiddenEmails = ['admin@gmail.com', 'superadmin@gmail.com']

  get hobbyControls() {
    return (this.signUpForm.get('hobbies') as FormArray).controls
  }

  constructor() { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        this.forbiddenUsernamesValidator.bind(this)
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ], this.forbiddenEmailAsyncValidator.bind(this)),
      gender: new FormControl('male'),
      hobbies: new FormArray([])
    })
  }

  onSubmit() {
    console.log('this.signUpForm', this.signUpForm)
    this.signUpForm.reset({
      gender: 'male',
    })
  }

  addHobby() {
    const control = new FormControl(null, Validators.required)

    const hobbies = <FormArray>this.signUpForm.get('hobbies')
    hobbies.push(control)
  }

  forbiddenUsernamesValidator(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.includes(control.value)) {
      return { nameIsForbidden: true }
    }
    return null
  }

  forbiddenEmailAsyncValidator(control: FormControl): Promise<any> | Observable<any> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (this.forbiddenEmails.includes(control.value.toLowerCase())) {
          return resolve({ emailIsForbidden: true })
        }
        resolve(null)
      }, 500)
    })
  }

  // onSubmit(form: NgForm) {
  //   console.log('f', form)
  //   this.ingradientCreated.emit({
  //     name: form.value.name,
  //     amount: form.value.amount
  //   })
  // }
}
