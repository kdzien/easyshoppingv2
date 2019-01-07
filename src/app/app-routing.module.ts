import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanComponent } from './scenes/plan/plan.component';
import { MealsComponent } from './scenes/meals/meals.component';
import { NewMealComponent } from './scenes/new-meal/new-meal.component';

const routes: Routes = [
  { path: '', component: PlanComponent },
  { path: 'plan', component: PlanComponent },
  { path: 'meals', component: MealsComponent },
  { path: 'meals/new', component: NewMealComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
