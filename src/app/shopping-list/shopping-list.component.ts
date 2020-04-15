import { Component, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/shared/ingredient.model';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  @ViewChild(ShoppingEditComponent) shoppingEditComponent: ShoppingEditComponent

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10),
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientCreated(newIngredient: Ingredient) {
    console.log('this.shoppingEditComponent', this.shoppingEditComponent)
    this.ingredients.push(newIngredient)
  }
}
