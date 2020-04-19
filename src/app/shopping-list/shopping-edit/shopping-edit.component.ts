import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/shared/ingredient.model';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingradientCreated = new EventEmitter<Ingredient>()

  signUpForm: FormGroup

  get hobbyControls() {
    return (this.signUpForm.get('hobbies') as FormArray).controls
  }

  constructor() { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      gender: new FormControl('male'),
      hobbies: new FormArray([])
    })
  }

  onSubmit() {
    console.log('this.signUpForm', this.signUpForm)
  }

  addHobby() {
    const control = new FormControl(null, Validators.required)

    const hobbies = <FormArray>this.signUpForm.get('hobbies')
    hobbies.push(control)
  }

  // onSubmit(form: NgForm) {
  //   console.log('f', form)
  //   this.ingradientCreated.emit({
  //     name: form.value.name,
  //     amount: form.value.amount
  //   })
  // }
}
