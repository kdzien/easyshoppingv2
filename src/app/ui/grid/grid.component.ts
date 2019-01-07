import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  public collection: any[];
  public collection2: any[];
  public users: any[]

  constructor() { }

  ngOnInit() {
    this.users = ['Konrad', 'Justyna'];
    this.collection  = [{
      'day': 'poniedziałek',
      'plan': [{
        'sniadanie': 'owsianka',
        'obiad': 'ryz',
        'kolacja': 'mozarela'
      }, {
        'sniadanie': 'truskawki',
        'obiad': 'kurczak',
        'kolacja': 'mozarela'
      }]
    }, {
      'day': 'wtorek',
      'plan': [{
        'sniadanie': 'rabarbra',
        'obiad': 'omlet',
        'kolacja': 'mozarela'
      }, {
        'sniadanie': 'maliny',
        'obiad': 'warzywa',
        'kolacja': 'mozarela'
      }]
    }];
    console.log(this.collection);
  }
  trackByIndex(index: number, obj: any): any {
    return index;
  }
}
