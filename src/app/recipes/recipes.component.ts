import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/service/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  get selectedRecipe() {
    return this.recipesService.selectedRecipe
  }

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
  }

}
