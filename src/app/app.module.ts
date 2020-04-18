import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule, Route } from '@angular/router'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { UnlessDirective } from 'src/shared/directives/unless.directive';
import { DropdownDirective } from 'src/shared/directives/dropdown.directive';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Route[] = [
  { path: '', component: RecipesComponent, pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent },
  { path: 'recipes/:id', component: RecipeDetailComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    BasicHighlightDirective,
    UnlessDirective,
    DropdownDirective,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
