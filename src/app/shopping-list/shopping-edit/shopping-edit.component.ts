import { Component, OnInit, Output, EventEmitter, ViewEncapsulation, ViewChild, ElementRef, AfterContentInit, ContentChild } from '@angular/core';
import { Ingredient } from 'src/shared/ingredient.model';
import { ShoppingListComponent } from '../shopping-list.component';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, AfterContentInit {
  @Output() ingradientCreated = new EventEmitter<Ingredient>()

  @ViewChild('amountInput') amountInput: ElementRef
  @ViewChild('nameInput') nameInput: ElementRef
  @ContentChild('createButton') createButton: ElementRef

  ingredient: Ingredient = new Ingredient(null, null)

  constructor() { }

  ngAfterContentInit(): void {
    console.log('this.createButton', this.createButton)
  }

  ngOnInit(): void {
  }

  onSubmit(event: Event) {
    this.ingradientCreated.emit({
      name: this.nameInput.nativeElement.value,
      amount: this.amountInput.nativeElement.valueAsNumber
    })
  }
}
