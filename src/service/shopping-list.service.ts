import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10),
  ]

  add(ingredients: Ingredient | Ingredient[]) {
    if (Array.isArray(ingredients)) {
      this.ingredients.push(...ingredients)
    } else {
      this.ingredients.push(ingredients)
    }
  }
}
