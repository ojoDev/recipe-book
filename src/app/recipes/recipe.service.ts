import {Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService {

    recipesChanged= new Subject<Recipe[]>();

    private recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This recipe is too good', 'http://www.seriouseats.com/recipes/assets_' +
    'c/2015/01/20150119-pressure-cooker-chicken-stew-food-lab-11-thumb-1500xauto-418088.jpg', [
        new Ingredient('Meat', 1),
        new Ingredient('Fries', 20)
    ]),
    new Recipe('Test Recipe 2', 'This recipe is too bad ', 'http://img.izismile.com/img/img2/20090212/food_16.jpg', [
        new Ingredient('Worms', 10),
        new Ingredient('Insercts', 8)
    ])
  ];

  constructor(private shoppingListService: ShoppingListService) {

  }



  getRecipes() {
      // Devolvemos una copia, no el original
      return this.recipes.slice();
  }

  getRecipe(id: number) {
    // Devolvemos una copia, no el original
    return this.recipes[id];
}

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
      this.recipes[index] = newRecipe;
      this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
}

setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
}

}
