import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, ContentChild } from '@angular/core';
import { Ingredient } from 'src/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingradientCreated = new EventEmitter<Ingredient>()

  @ViewChild('amountInput') amountInput: ElementRef
  @ViewChild('nameInput') nameInput: ElementRef
  @ContentChild('createButton') createButton: ElementRef

  ingredient: Ingredient = new Ingredient(null, null)

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.ingradientCreated.emit({
      name: this.nameInput.nativeElement.value,
      amount: this.amountInput.nativeElement.valueAsNumber
    })
  }
}
