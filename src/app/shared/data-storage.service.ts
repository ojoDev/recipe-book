import { Injectable } from '@angular/core';
import {  Response } from '@angular/http';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/add/operator/map';
import { AuthService } from '../auth/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpParams, HttpRequest } from '@angular/common/http';

@Injectable()
export class DataStorageService {
    constructor(private httpClient: HttpClient, private recipeService: RecipeService,
    private authService: AuthService) {

    }

    storeRecipes() {
        // return this.httpClient.put('https://ng-recipe-book-885ff.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
        //     observe: 'body',
        //     params: new HttpParams().set('auth', token)
        // });
        const req = new HttpRequest(
            'PUT',
            'https://ng-recipe-book-885ff.firebaseio.com/recipes.json',
            this.recipeService.getRecipes,
            {
                reportProgress: true
            });
           return this.httpClient.request(req);
    }

    getRecipes() {
        return this.httpClient.get<Recipe[]>('https://ng-recipe-book-885ff.firebaseio.com/recipes.json').map(
        (recipes) => { // Se mapea para que pueda tener ingredientes vacios en el back
                for (const recipe of recipes) {
                    if (!recipe['ingredients']) {
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            }
        )
        .subscribe(
            (recipes: Recipe[]) => {
            this.recipeService.setRecipes(recipes);
        }
    );
    }
}
