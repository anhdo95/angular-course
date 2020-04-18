import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthService } from 'src/service/auth.service';
import { AuthGuard } from 'src/service/auth-guard.service';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: '', component: RecipesComponent, pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: ':id', component: RecipeDetailComponent },
  ] },
  { path: 'shopping-list', component: ShoppingListComponent, canActivate: [AuthGuard] },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService, AuthGuard
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
