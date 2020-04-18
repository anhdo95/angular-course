import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/service/shopping-list.service';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipesService } from 'src/service/recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe

  constructor(private slService: ShoppingListService,
              private recipesService: RecipesService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((updatedParams: Params) => {
      this.getRecipeById(updatedParams.id)
    })
  }

  getRecipeById(id: Number | String) {
    this.recipe = this.recipesService.getById(+id)
  }

  onAddIngredientsToRecipe() {
    this.slService.add(this.recipe.ingredients)
  }
}
