import { Component, OnInit, OnChanges, ChangeDetectorRef, NgZone } from '@angular/core';
import { Meal } from 'src/app/business/dataModels/meal';
import { DayPlan } from 'src/app/business/dataModels/plan';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit, OnChanges {
  public collection: DayPlan[];
  public collection2: any[];
  public users: any[];
  public meals: Meal[];
  constructor(
  ) { }

  ngOnInit() {
    this.users = ['Konrad', 'Justyna'];
    this.meals = [{
      name: 'Kurczak z ryżem',
      ingredients: [
        {name: 'Kurczak', unit: 'sztuka', count: 1},
        {name: 'Ryż', unit: 'sztuka', count: 1},
      ]
      }, {
        name: 'Naleśniki',
        ingredients: [
          {name: 'Mąka', unit: 'sztuka', count: 1},
          {name: 'Mleko', unit: 'sztuka', count: 1},
        ]
      }
    ];
    this.collection  = [{
      'dayName': 'poniedziałek',
      'plan': {
        'sniadanie': {
          'type': 1,
          'name': 'owsianka'
        },
        'obiad': {
          'type': 2,
          'name': 'białczanka'
        },
        'kolacja': {
          'type': 3,
          'name': 'owsianka'
        }
      }
    }];
  }

  ngOnChanges(changes: any): void {
    console.log(changes);
  }

  public trackByIndex(index: number, obj: any): any {
    return index;
  }

  public onMealChange(selectedDay: string, type: number, value: string) {
    // this.collection.find(elem => elem.dayName === selectedDay)
    const arr  = [],
    keys = Object.keys(this.collection);

for (let i = 0, n = keys.length ; i < n; i++){
  const key  = keys[i];
  arr[key] = this.collection[key];
}
console.log(arr);
  }
}
