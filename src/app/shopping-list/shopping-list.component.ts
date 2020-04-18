import { Component, OnInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { Ingredient } from 'src/shared/ingredient.model';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListService } from 'src/service/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  @ViewChild(ShoppingEditComponent) shoppingEditComponent: ShoppingEditComponent

  get ingredients() {
    return this.slService.ingredients
  }

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onIngredientCreated(newIngredient: Ingredient) {
    this.slService.add(newIngredient)
  }
}
