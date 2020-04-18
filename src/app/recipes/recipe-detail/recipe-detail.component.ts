import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/service/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnChanges {
  @Input() recipe: Recipe

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes)
  }

  onAddIngredientsToRecipe() {
    this.slService.add(this.recipe.ingredients)
  }
}
