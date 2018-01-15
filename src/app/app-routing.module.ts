import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { RecipesComponent } from './recipes/recipes.component';
import { PreloadAllModules } from '@angular/router';



const appRoutes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'recipes', component: RecipesComponent}
 // { path: 'recipes', loadChildren: './recipes/recipes.module.ts#RecipesModule'}
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
