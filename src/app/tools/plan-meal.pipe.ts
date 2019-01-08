import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'planMeal'
})
export class PlanMealPipe implements PipeTransform {

  transform(value: any | any[], args?: any): any {
    if (!args) {
      return value.meal;
    } else {
      return value.filter(elem => elem.type === args);
    }
  }

}
