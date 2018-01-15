import { ShoppingListComponent } from './shopping-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const shoppingListRoutes: Routes = [
    { path: 'shopping-list', component: ShoppingListComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(shoppingListRoutes)],
    exports: [RouterModule]
})
export class ShoppingListRoutingModule {

}
