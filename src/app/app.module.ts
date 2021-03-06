import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanComponent } from './scenes/plan/plan.component';
import { MealsComponent } from './scenes/meals/meals.component';
import { NewMealComponent } from './scenes/new-meal/new-meal.component';
import { GridComponent } from './ui/grid/grid.component';
import { ShoppingListComponent } from './scenes/shopping-list/shopping-list.component';
import { PlanMealPipe } from './tools/plan-meal.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PlanComponent,
    MealsComponent,
    NewMealComponent,
    GridComponent,
    ShoppingListComponent,
    PlanMealPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
