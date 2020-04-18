import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from 'src/service/recipes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  constructor(private recipesService: RecipesService, private router: Router, private route: ActivatedRoute) { }

  get recipes() {
    return this.recipesService.recipes
  }

  ngOnInit(): void {
  }

  onSelect(recipe: Recipe) {
    this.recipesService.recipeSelected.emit(recipe)
  }

  onCreateRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }
}
