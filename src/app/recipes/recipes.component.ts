import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipesService } from 'src/service/recipes.service';
import { Recipe } from './recipe.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit, OnDestroy {
  selectedRecipe: Recipe
  subscription: Subscription

  constructor(private recipesService: RecipesService) {
    this.subscription = recipesService.recipeSelected.subscribe(
      recipe => this.selectedRecipe = recipe
    )
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
