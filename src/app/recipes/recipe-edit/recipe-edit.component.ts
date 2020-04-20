import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { RecipesService } from 'src/service/recipes.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Ingredient } from 'src/shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipe: Recipe = new Recipe(null, null, null, null, [])
  recipeForm: FormGroup

  get ingredientControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls
  }

  constructor(private router: Router,
              private route: ActivatedRoute,
              private recipesService: RecipesService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params.id) {
        this.recipe = this.recipesService.getById(params.id)
      }
    })

    this.recipeForm = new FormGroup({
      name: new FormControl(this.recipe.name, Validators.required),
      imagePath: new FormControl(this.recipe.imagePath, Validators.required),
      description: new FormControl(this.recipe.description, Validators.required),
      ingredients: new FormArray([])
    })

    if (this.recipe.ingredients.length) {
      this.recipe.ingredients.forEach(ingredient => this.addIngredient(ingredient))
    }
  }

  addIngredient(ingredient: Ingredient = new Ingredient(null, 1)) {
    const formGroup = new FormGroup({
      name: new FormControl(ingredient.name, Validators.required),
      amount: new FormControl(ingredient.amount, [
        Validators.required,
        Validators.pattern(/^[1-9]\d*$/)
      ])
    })

    const ingredients = this.recipeForm.get('ingredients') as FormArray

    ingredients.push(formGroup)
  }

  onSubmit() {
    console.log('this.recipeForm', this.recipeForm)

    if (this.recipe.id) {
      this.recipesService.update({
        id: this.recipe.id,
        ...this.recipeForm.value
      })
    } else {
      this.recipesService.add(this.recipeForm.value)
    }

    this.recipeForm.reset()
    this.router.navigateByUrl('/recipes')
  }
}
