import { Recipe } from 'src/app/recipes/recipe.model';

export class RecipesService {
  recipes: Recipe[] = [
    new Recipe('A cake', 'A great food!', 'https://www.cscassets.com/recipes/wide_cknew/wide_32.jpg')
  ]
  selectedRecipe: Recipe

  add(recipe: Recipe) {
    this.recipes.push(recipe)
  }

  remove(recipe: Recipe) {
    this.recipes = this.recipes.filter(r => r.name !== recipe.name)
  }

  setSelectedRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe
  }
}
