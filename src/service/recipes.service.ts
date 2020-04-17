import { Recipe } from 'src/app/recipes/recipe.model';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipes: Recipe[] = [
    new Recipe('A cake', 'A great food!', 'https://www.cscassets.com/recipes/wide_cknew/wide_32.jpg')
  ]
  recipeSelected = new EventEmitter<Recipe>()

  add(recipe: Recipe) {
    this.recipes.push(recipe)
  }

  remove(recipe: Recipe) {
    this.recipes = this.recipes.filter(r => r.name !== recipe.name)
  }
}
