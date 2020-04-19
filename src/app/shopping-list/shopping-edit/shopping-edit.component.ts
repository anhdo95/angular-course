import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/shared/ingredient.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingradientCreated = new EventEmitter<Ingredient>()

  signUpForm: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      gender: new FormControl('male'),
    })
  }

  onSubmit() {
    console.log('this.signUpForm', this.signUpForm)
  }

  // onSubmit(form: NgForm) {
  //   console.log('f', form)
  //   this.ingradientCreated.emit({
  //     name: form.value.name,
  //     amount: form.value.amount
  //   })
  // }
}
