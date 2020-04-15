import { Component, OnInit, Output, EventEmitter, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/shared/ingredient.model';
import { ShoppingListComponent } from '../shopping-list.component';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingradientCreated = new EventEmitter<Ingredient>()

  @ViewChild('amountInput') amountInput: ElementRef
  @ViewChild('nameInput') nameInput: ElementRef

  ingredient: Ingredient = new Ingredient(null, null)

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(event: Event) {
    this.ingradientCreated.emit({
      name: this.nameInput.nativeElement.value,
      amount: this.amountInput.nativeElement.valueAsNumber
    })
  }
}
