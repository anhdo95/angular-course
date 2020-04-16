import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit, OnChanges {
  @Input() recipe: Recipe
  @Input() recipeName: string

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes)
  }

  ngOnInit(): void {
  }
}
