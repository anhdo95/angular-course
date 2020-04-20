import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RecipesService } from 'src/service/recipes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipe: Recipe = new Recipe(null, null, null, null, [])
  recipeForm: FormGroup

  constructor(private router: Router,
              private recipesService: RecipesService) { }

  ngOnInit(): void {
    this.recipeForm = new FormGroup({
      name: new FormControl(this.recipe.name, Validators.required),
      imagePath: new FormControl(this.recipe.imagePath, Validators.required),
      description: new FormControl(this.recipe.description, Validators.required),
    })
  }

  onSubmit() {
    console.log('this.recipeForm', this.recipeForm)

    if (this.recipe.id) {

    } else {
      this.recipesService.add(this.recipeForm.value)
    }

    this.recipeForm.reset()
    this.router.navigateByUrl('/recipes')
  }
}
