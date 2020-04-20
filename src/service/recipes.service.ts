import { Recipe } from 'src/app/recipes/recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipes: Recipe[] = [
    new Recipe(
      1,
      'A cake',
      'A great food!',
      'https://www.cscassets.com/recipes/wide_cknew/wide_32.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Egg', 4),
      ],
      [
        new Recipe(
          11,
          'A pen cake',
          'Good for your breakfast',
          'https://i.ytimg.com/vi/rkUY0Scu5UU/hqdefault.jpg',
          [
            new Ingredient('Cheese', 1),
            new Ingredient('Egg', 2),
          ]
        )
      ]
    ),
    new Recipe(
      11,
      'A pen cake',
      'Good for your breakfast',
      'https://i.ytimg.com/vi/rkUY0Scu5UU/hqdefault.jpg',
      [
        new Ingredient('Cheese', 1),
        new Ingredient('Egg', 2),
      ]
    )
  ]
  recipeSelected = new EventEmitter<Recipe>()

  getById(id: Number): Recipe {
    return this.recipes.find(r => r.id === id)
  }

  add(recipe: Recipe) {
    if (!recipe.id) {
      recipe.id = this.recipes.length + 1
    }

    this.recipes.push(recipe)
  }

  remove(recipe: Recipe) {
    this.recipes = this.recipes.filter(r => r.id !== recipe.id)
  }
}
